import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { BaseGateway } from "../base.gateway";
import { Events } from "../events.types";
import { PinoLogger } from "nestjs-pino";
import { JwtService } from "@nestjs/jwt";
import { Socket } from "socket.io";

@WebSocketGateway({
  namespace: '/ws/shared_list',
  cors: {origin: true, credentials: true}
})
export class SharedListGateway extends BaseGateway {
  constructor(logger: PinoLogger, jwtService: JwtService) {
    super(logger, jwtService)
  }

  @SubscribeMessage(Events.LIST_JOIN)
  handleJoinList(
    @ConnectedSocket() client: Socket, 
    @MessageBody() payload: { listId: string }
  ) {
    this.joinListRoom(client, payload.listId)
  }

  @SubscribeMessage(Events.LIST_LEFT)
  handleLeaveList(client: Socket, payload: {listId: string}) {
    this.leaveListRoom(client, payload.listId)
  }

  emitUserAdded(listId: string, payload: any) {
    this.emitToList(listId, Events.SHARED_ADDED, payload)
  }

  emitUserRemoved(listId: string, payload: any, idsUser: string[]) {
    this.emitToUsers(idsUser, Events.SHARED_REMOVED, payload)
    this.emitToList(listId, Events.SHARED_REMOVED, payload)
  }

  emitUSerRole(listId: string, payload: any) {
    this.emitToList(listId, Events.SHARED_USER_ROL, payload)
  }
}