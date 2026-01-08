import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { SharedListGateway } from "src/sockets/gateway/shared_lists.gateway";
import { createSharedDto, editSharedDto } from "./dto/shared.dto";
import { ListsService } from "src/lists/lists.service";
import { UsersGateway } from "src/sockets/gateway/users.gateway";

@Injectable()
export class sharedListService {
  constructor(
    private prisma: PrismaService,
    private sharedGateway: SharedListGateway,
    private userGateway: UsersGateway,
    private listService: ListsService
  ){}

  async addedUser(dto: createSharedDto, listId: string, idUser: string) {
    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })

    await this.listService.existList(listId)

    const exists = await this.prisma.sharedList.findUnique({
      where: {
        listId_userId: {listId, userId: dto.userId}
      }
    })
    if(exists) throw new BadRequestException('El usuario ya esta en la lista')

    const shared = await this.prisma.sharedList.create({
      data: {
        listId,
        userId: dto.userId,
        role: dto.role
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))

    this.sharedGateway.emitUserAdded(listId, shared)
    this.userGateway.emitUserAddedToList(userIds, shared)

    return shared
  }

  async updateRol(dto: editSharedDto, listId: string) {
    await this.listService.existList(listId)

    const shared = await this.prisma.sharedList.findUnique({
      where: {id: dto.id}
    })

    if(!shared || shared.listId !== listId) throw new BadRequestException('Shared Invalido')

    const updated = await this.prisma.sharedList.update({
      where: { id: dto.id },
      data: { role: dto.role }
    })

    this.sharedGateway.emitUSerRole(listId, updated)
    return updated
  }

  async deleteUser(listId: string, sharedId: string) {
    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })
    await this.listService.existList(listId)

    const shared = await this.prisma.sharedList.findUnique({
      where: {id: sharedId}
    })

    if(!shared || shared.listId !== listId) throw new BadRequestException('Shared Invalido')

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))

    const deleteUser = await this.prisma.sharedList.delete({where: {id: sharedId}})

    this.sharedGateway.emitUserRemoved(listId, deleteUser, userIds)
    return deleteUser
  }

  async getMyAllSharedList(userId: string) {
    const sharedLists = await this.prisma.sharedList.findMany({
      where: { userId },
      select: {
        role: true,
        list: {
          include: {
            owner: {
              select: { id: true, name: true }
            },
            shared: {
              include: {
                user: {
                  select: { id: true, name: true, email: true }
                }
              }
            },
            items: {
              select: {
                id: true,
                quantity: true,
                price: true,
                purchased: true,
                purchasedById: true,
                purchasedBy: {
                  select: { id: true, name: true }
                },
                item: {
                  select: {
                    id: true,
                    name: true,
                    imagePublicId: true,
                    imageUrl: true
                  }
                }
              }
            }
          }
        }
      }
    })

    return sharedLists.map(s => ({
      ...s.list,
      role: s.role
    }))
  }

  async getUsersList(listId: string) {
    return this.prisma.sharedList.findMany({
      where: {listId},
      select: {
        id: true,
        role: true,
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    })
  }
}