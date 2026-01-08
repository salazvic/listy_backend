import { WebSocketGateway } from "@nestjs/websockets";
import { BaseGateway } from "../base.gateway";
import { Events } from "../events.types";
import { PinoLogger } from "nestjs-pino";
import { JwtService } from "@nestjs/jwt";

@WebSocketGateway({
  namespace: '/ws/items',
  cors: {origin: true, credentials: true}
})
export class ItemsGateway extends BaseGateway {
  constructor(logger: PinoLogger, jwtService: JwtService) {
    super(logger, jwtService)
  }
  
  emitItemCreate(payload: any) {
    this.logger.info('[SOCKET][ITEM]', Events.ITEM_CREATED)
    this.emitGlobal(Events.ITEM_CREATED, payload)
  }

  emitItemUpdated(payload: any) {
    this.emitGlobal(Events.ITEM_UPDATED, payload)
  }

  emitItemDeleted(payload: any) {
    this.emitGlobal(Events.ITEM_DELETED, payload)
  }

}