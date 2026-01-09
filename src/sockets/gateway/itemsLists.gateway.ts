import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { BaseGateway } from "../base.gateway";
import { Events } from "../events.types";
import { PinoLogger } from "nestjs-pino";
import { JwtService } from "@nestjs/jwt";
import { Socket } from "socket.io";

@WebSocketGateway({
  namespace: '/ws/items_lists',
  cors: {
    origin: process.env.ORIGIN, 
    credentials: true
  }
})
export class ItemsListsGateway extends BaseGateway{
  constructor(logger: PinoLogger, jwtService: JwtService) {
    super(logger, jwtService)
  }

  handleConnection(client: Socket) {
    const userId = client.data.userId
    if(userId) {
      client.join(`user:${userId}`)
      this.logger.info(`[SOCKET][ITEM_LIST] ${client.id} joined user:${userId}`)
    }
  }

  @SubscribeMessage(Events.LIST_JOIN)
  handleJoinList(
    @ConnectedSocket() client: Socket, 
    @MessageBody() payload: { listId: string }
  ) {
    this.logger.info(`[SOCKET][ITEM_LIST] ${client.id} joined room list:${payload.listId}`)
    this.joinListRoom(client, payload.listId)
  }

  @SubscribeMessage(Events.LIST_LEFT)
  handleLeaveList(client: Socket, payload: {listId: string}) {
    this.leaveListRoom(client, payload.listId)
  }

  emitItemListAdded(listId: string, payload: any, userId: string[],) {
    this.logger.info(`[SOCKET][LIST]=> ${Events.ITEM_LIST_ADDED}`)
    
    this.emitToList(listId, Events.ITEM_LIST_ADDED, payload)
    this.emitToUsers(userId, Events.ITEM_LIST_ADDED, payload)
  }

  emitItemListUpdate(listId: string, payload: any, userIds: string[]) {
    this.logger.info(`[SOCKET][LIST]=> ${Events.ITEM_LIST_UPDATED}`)

    this.emitToList(listId, Events.ITEM_LIST_UPDATED, payload)
    this.emitToUsers(userIds, Events.ITEM_LIST_UPDATED, payload)
  }

  emitAllItemListUpdate(listId: string, purchased: boolean, userIds: string[], idUser: string) {
    this.logger.info(`[SOCKET][LIST]=> ${Events.ALL_ITEM_LIST_UPDATED}`)

    this.emitToList(listId, Events.ALL_ITEM_LIST_UPDATED, {listId, purchased, purchasedById: idUser})
    this.emitToUsers(userIds, Events.ALL_ITEM_LIST_UPDATED, {listId, purchased, purchasedById: idUser})
  }

  emitItemListDeleted(listId: string, payload: any, userIds: string[]) {
    this.logger.info(`[SOCKET][LIST]=> ${Events.ITEM_DELETED}`)

    this.emitToList(listId, Events.ITEM_LIST_DELETED, payload)
    this.emitToUsers(userIds, Events.ITEM_LIST_DELETED, payload)
  }
}