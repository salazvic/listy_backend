import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PinoLogger } from "nestjs-pino";
import { Socket } from "socket.io";

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: PinoLogger
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const client: Socket = context.switchToWs().getClient<Socket>()
    const token = client.handshake.auth?.token
    if(!token){
      throw new UnauthorizedException('No token WS')
    }

    try {
      const payload = this.jwtService.verify(token)
      client.data.user(payload)

      return true
    } catch (error) {
      this.logger.error('Token ws invalido')
      throw new UnauthorizedException('Yoken WS invalido')
    }
  }
}