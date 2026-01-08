import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { PinoLogger } from "nestjs-pino";
import { BaseGateway } from "../base.gateway";
import { Events } from "../events.types";
import { Socket } from "socket.io";
import { JwtService } from "@nestjs/jwt";

@WebSocketGateway({
  namespace: '/ws/users',
  cors: {
    origin: process.env.ORIGIN, 
    credentials: true
  },
})
export class UsersGateway extends BaseGateway {
  constructor(logger: PinoLogger, jwtService: JwtService) {
    super(logger, jwtService)
  }

  /* handleConnection(client: Socket) {
    const userId = client.data.userId 
    this.joinUserRoom(client, userId)
  } */

  @SubscribeMessage(Events.USER_CONNECTED)
  handleJoinList(
    @ConnectedSocket() client: Socket, 
    @MessageBody() payload: { userId: string }
  ) {
    this.joinUserRoom(client, payload.userId)
  }

  @SubscribeMessage(Events.USER_DISCONNECTED)
  handleLeaveList(client: Socket, payload: {userId: string}) {
    this.leaveUserRoom(client, payload.userId)
  }

  emitUserProfile(payload: any) {
    this.emitGlobal(Events.USER_PROFILE, payload)
  }

  emitUserDelete(payload: any) {
    this.emitGlobal(Events.USER_DELETED, payload)
  }

  emitListCreate(userId: string, payload: any) {
    this.emitToUser(userId, Events.LIST_CREATED, payload)
  }

  emitListDelete(userId: string[], payload: any) {
    this.emitToUsers(userId, Events.LIST_DELETED, payload)
  }

  emitListUpdate(members: string[], payload: any, ) {
    this.emitToUsers(members, Events.LIST_UPDATED, payload)
  }

  emitUserAddedToList(members: string[], payload: any) {
    this.emitToUsers(members, Events.SHARED_ADDED, payload)
  }

}