import { BadRequestException, Injectable } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { PrismaService } from "src/prisma/prisma.service";
import { ListsGateway } from "src/sockets/gateway/lists.gateway";
import { createListDto, editListDto } from "./dto/lists.dto";
import { UsersGateway } from "src/sockets/gateway/users.gateway";

@Injectable()
export class ListsService {
  constructor(
    private prisma: PrismaService,
    private listGateway: ListsGateway,
    private userGateway: UsersGateway,
    private readonly logger: PinoLogger
  ){}

  async createList(data: createListDto){
    const newList = await this.prisma.list.create({
      data: {
        name: data.name,
        ownerId: data.ownerId
      }
    })

    this.userGateway.emitListCreate(newList.ownerId, newList)
    return newList
  }

  async getUserLists(ownerId: string) {
    const list = await this.prisma.list.findMany({
      where: {ownerId},
      orderBy: {
        createdAt: "desc"
      },
      include: {
        items: {
          select: {
            id: true,
            quantity: true,
            price: true,
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
    })

    return list.map(list => ({
      ...list,
      role: 'OWNER'
    }))
  }

  async getOneList(id: string, userId: string) {
    const list = await this.prisma.list.findUnique({
      where: {id},
      include: {
        owner: {
          select: {
            id: true,
            name: true
          }
        },
        shared: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true
              }
            }
          }
        },
        items: {
          select:{
            id: true,
            quantity: true,
            price: true,
            purchased: true,
            purchasedById: true,
            purchasedBy: {
              select: {
                id: true,
                name: true,
              },
            },
            item: {
              select: {
                id: true,
                name: true,
                imagePublicId: true,
                imageUrl: true                                
              }
            }
          },
        }
      }
    })

    const role =
    list?.owner.id === userId
      ? 'OWNER'
      : list?.shared.some(s => s.user.id === userId)
        ? 'MEMBER'
        : null

    return { ...list, role }
  }

  async editList(id: string, dto: editListDto, ownerId: string) {
    const list = await this.prisma.list.findUnique({
      where: {id}
    })
    
    if( !list || list.ownerId !== ownerId) throw new BadRequestException('No autorizado')

    const members = await this.prisma.sharedList.findMany({
      where: {listId: id},
      select: {userId: true}
    })

    const userIds = [
      list.ownerId,
      ...members.map(m => m.userId)
    ]

    const editList = await this.prisma.list.update({
      where: {id},
      data: {
        name: dto.name
      }
    })    

    this.userGateway.emitListUpdate(userIds, editList )
    return editList
  }

  async deleteList(id: string, ownerId: string) {
    const list = await this.prisma.list.findUnique({
      where: {id}
    })
    
    if( !list || list.ownerId !== ownerId) throw new BadRequestException('No autorizado')

    const members = await this.prisma.sharedList.findMany({
      where: {listId: id},
      select: {userId: true}
    })

    const userIds = [
      list.ownerId,
      ...members.map(m => m.userId)
    ]

    const deletedList = await this.prisma.list.delete({
      where: {id}
    })

    this.userGateway.emitListDelete(userIds, deletedList.id)
    return deletedList
  }

  async existList(id: string) {
    const existList = await this.prisma.list.findUnique({
      where: {id}
    })
    if(!existList) throw new BadRequestException('No existe la lista')

    return true
  }
}