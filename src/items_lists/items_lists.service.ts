import { BadRequestException, Injectable } from "@nestjs/common";
import { ListsService } from "src/lists/lists.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ItemsListsGateway } from "src/sockets/gateway/itemsLists.gateway";
import { crateItemListDto, updateItemListDto } from "./dto/itemLists.dto";

@Injectable()
export class ItemsListService {
  constructor(
    private prisma: PrismaService,
    private itemListGateway: ItemsListsGateway,
    private listService: ListsService
  ){}

  async addedItemList(listId: string, payload: crateItemListDto) {
    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))

    const added = await this.prisma.itemList.create({
      data: {
        listId,
        itemId: payload.itemId,
        quantity: payload.quantity,
        price: payload.price
      },
      include: {
        item: {
          select: {
            name: true
          }
        }
      }
    })

    this.itemListGateway.emitItemListAdded(listId, added, userIds)
    return added
  }

  async updateItemList(listId: string, payload: updateItemListDto) {
    await this.listService.existList(listId)
    const item = await this.prisma.itemList.findUnique({
      where: {id: payload.id}
    })
    if(!item || item.listId !== listId) throw new BadRequestException('Item Invalido')

    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))
    
    const updateItem = await this.prisma.itemList.update({
      where: {
        id: payload.id
      },
      data: {
        price: payload.price || 0,
        quantity: payload.quantity || 0,
        purchased: payload.purchased || false,
        purchasedById: payload.purchasedById || null
      }
    })

    const itemResponse = {
      ...updateItem,
      price: updateItem.price instanceof Object
        ? updateItem.price.toNumber()
        : Number(updateItem.price),
      quantity: Number(updateItem.quantity),
    }

    this.itemListGateway.emitItemListUpdate(listId, itemResponse, userIds)
    return itemResponse
  }

  async updateMarkAllItemList(listId: string, payload: any, idUser: string) {
    await this.listService.existList(listId)
    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))
    
    const updateItem = await this.prisma.itemList.updateMany({
      where: {
        id: { in: payload.itemIds}
      },
      data: {
        purchased: payload.purchased || false,
        purchasedById: idUser || null
      }
    })

    this.itemListGateway.emitAllItemListUpdate(listId, payload.purchased, userIds, idUser)
    return updateItem
  }

  async deleteItemList(listId: string, id: string) {
    const exisItem = await this.prisma.itemList.findUnique({where: {id}})

    if(!exisItem) throw new BadRequestException('Item Invalido')

    const list = await this.prisma.list.findUnique({
      where: {id: listId}
    })

    const members = await this.prisma.sharedList.findMany({
      where: {listId: listId},
      select: {userId: true}
    })

    const userIds = [
      list?.ownerId,
      ...members.map(m => m.userId)
    ].filter((id): id is string => Boolean(id))

    const deleteItem = await this.prisma.itemList.delete({where: {id}})

    this.itemListGateway.emitItemListDeleted(listId, deleteItem, userIds)

    return deleteItem
  }
}