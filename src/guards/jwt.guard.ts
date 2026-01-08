import { 
  CanActivate, 
  ExecutionContext,
  Injectable,
  UnauthorizedException 
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { PinoLogger } from "nestjs-pino";

@Injectable()
export class JwtGuard implements CanActivate{
  constructor(
    private readonly jwtService: JwtService,
    private readonly logger: PinoLogger,
    private readonly reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      'isPublic',
      [context.getHandler(), context.getClass()]
    )

    if(isPublic) return true

    const req = context.switchToHttp().getRequest()
    const token = req.cookies?.access_token

    if(!token) {
      throw new UnauthorizedException('No token')
    }

    try {
      const payload = this.jwtService.verify(token)
      req.user = payload
      return true
    } catch (error) {
      this.logger.error(error)
      throw new UnauthorizedException('Token invalido o expirado')
    }
  }
}