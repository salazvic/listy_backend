import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { JwtService } from "@nestjs/jwt"
import { PinoLogger } from "nestjs-pino"

@Injectable()
export class JwtGuard implements CanActivate {
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
    if (isPublic) return true

    const req = context.switchToHttp().getRequest()

    let token: string | undefined

    // 1️⃣ Primero Authorization header (mobile / api directa)
    const authHeader = req.headers.authorization
    if (authHeader?.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1]
    }

    // 2️⃣ Fallback a cookie (BFF / web)
    if (!token && req.cookies?.access_token) {
      token = req.cookies.access_token
    }

    if (!token) {
      throw new UnauthorizedException('No access token')
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      })

      req.user = payload
      return true
    } catch (error) {
      this.logger.error(error)
      throw new UnauthorizedException('Token inválido o expirado')
    }
  }
}
