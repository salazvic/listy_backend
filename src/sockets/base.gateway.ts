import { JwtService } from "@nestjs/jwt";
import { WebSocketServer } from "@nestjs/websockets";
import { PinoLogger } from "nestjs-pino";
import { Server, Socket } from "socket.io";
import cookie from "cookie"

export abstract class BaseGateway {
  @WebSocketServer()
  protected server: Server;

  constructor(
    protected readonly logger: PinoLogger,
    protected readonly jwtService: JwtService
  ) {}

  afterInit(server: Server) {
    server.use((client: Socket, next) => {
      try {
        const rawCookies = client.handshake.headers.cookie || ""
        const parsed = cookie.parse(rawCookies)
        const token = parsed["access_token"]

        if(!token) throw new Error("No token ws")

        const payload = this.jwtService.verify(token)

        client.data.userId = payload.sub
        client.data.user = payload

        next()
      } catch (err: any) {
        this.logger.error(`Socket auth fallo: ${err?.message}`)
        next(new Error("Unauthorized"))
      }
    })
  }

  handleConnection(client: Socket) {
    console.log('✅ Socket conectado:', client.id);
    console.log('👤 User:', client.data.user.sub);

    if (client.data.userId) {
      this.joinUserRoom(client, client.data.userId);
    }
  }

  protected joinListRoom(client: Socket, listId: string) {
    const room = this.listRoom(listId);
    client.join(room);
    this.logger.info(`[SOCKET][LIST] ${client.id} joined list ${room}`)
  }

  protected leaveListRoom(client: Socket, listId: string) {
    const room = this.listRoom(listId);
    client.leave(room);
    this.logger.info(`[SOCKET] ${client.id} left list ${room}`)
  }

  protected joinUserRoom(client: Socket, userId: string) {
    const room = this.userRoom(userId)

    client.join(room)
    this.logger.info(`[SOCKET][USER] ${client.id} joined own room ${room}`)
  }

  protected leaveUserRoom(client: Socket, userId: string) {
    const room = this.userRoom(userId)

    client.leave(room)
    this.logger.info(`[SOCKET][USER] ${client.id} left own room ${room}`)
  }

  protected emitToList(listId: string, event: string, payload: any) {
    this.logger.info(`EMIT ${event} TO LIST ${this.listRoom(listId)}`)
    this.server.to(this.listRoom(listId)).emit(event, payload)
  }

  protected emitToUser(userId: string, event: string, payload: any) {
    this.logger.info(`EMIT ${event} TO USER ${this.userRoom(userId)}`)
    this.server.to(this.userRoom(userId)).emit(event, payload)
  }

  protected emitToUsers(userIds: string[], event: string, payload: any) {
    this.logger.info(`EMIT ${event} TO USERS: ${userIds.join(', ')}`)
    this.server.to(
      userIds.map(id => `user:${id}`)
    ).emit(event, payload)
  }

  protected emitGlobal(event: string, payload: any) {
    this.logger.info(`EMIT ${event} GLOBAL`)
    this.server.emit(event, payload)
  }

  private listRoom(listId: string) {
    return `list:${listId}`
  }

  private userRoom(userId: string) {
    return `user:${userId}`
  }
}