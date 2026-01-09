import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from "@nestjs/websockets";
import { Socket } from 'socket.io'
import { PinoLogger } from 'nestjs-pino'; 
import { BaseGateway } from "../base.gateway";
import { Events } from "../events.types";
import { JwtService } from "@nestjs/jwt";

@WebSocketGateway({
  namespace: '/ws/lists',
  cors: {
    origin: process.env.ORIGIN,
    credentials: true
  },
})
export class ListsGateway extends BaseGateway {
  constructor(logger: PinoLogger, jwtService: JwtService) {
    super(logger, jwtService) 
  }

  handleConnection(client: Socket) {
    const userId = client.data.userId
    if(userId) {
      client.join(`user:${userId}`)
      this.logger.info(`[SOCKET][LIST] ${client.id} joined user:${userId}`)
    }
  }
  
  @SubscribeMessage(Events.LIST_JOIN)
  handleJoinList(
    @ConnectedSocket() client: Socket, 
    @MessageBody() payload: { listId: string }
  ) {
    this.logger.info(`[SOCKET][LIST] ${client.id} joined room list:${payload.listId}`)
    this.joinListRoom(client, payload.listId)
  }

  @SubscribeMessage(Events.LIST_LEFT)
  handleLeaveList(client: Socket, payload: {listId: string}) {
    this.leaveListRoom(client, payload.listId)
  }

  emitUserJoitnToList(userId: string, listId: string) {
    this.emitToUser(userId, Events.LIST_JOIN, listId)
  }
}