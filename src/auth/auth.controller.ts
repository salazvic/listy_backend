import { 
  Body, 
  Controller, 
  Delete, 
  Get,  
  Post, 
  Req, 
  Res, 
  UnauthorizedException 
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto } from "./dto/auth.dto";
import { Public } from "../decorator/public.decorator";
import { UserId } from "../decorator/user-id.decorator";
import type { Response, Request } from "express";
import { PinoLogger } from "nestjs-pino";
import { JwtService } from "@nestjs/jwt";
import { MailService } from "src/mail/mail.service";

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private logger: PinoLogger,
    private readonly jwt: JwtService,
    private mail: MailService
  ) { }

  @Post('register')
  @Public()
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @Public()
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.authService.login(dto.email, dto.password);    
  }

  @Delete('delete')
  deletMe(@Req() req) {
    return this.authService.deleteUSer(req.user.sub)
  }

  @Post('logout')
  logout(
    @Res({ passthrough: true }) res: Response,
    @UserId() userId: string
  ) {
    this.clearAuthCookies(res)
    return this.authService.logout(userId)
  }


  @Public()
  @Post('refresh')
  async refresh(
    @Req() req: Request
  ) {
    const refreshToken = req.cookies?.refresh_token
    
    if(!refreshToken) {
      throw new UnauthorizedException('No refresh token')
    }

    return this.authService.refresh(refreshToken)
  }

  @Get('me')
  async me(@Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException
    }
    return this.authService.getMe(req.user.sub)
  }

  private setAuthCookies(res: Response, tokens: any) {
    const isProd = process.env.NODE_ENV === 'production'

    res.cookie('access_token', tokens.access_token, {
      httpOnly: true,
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd,
      path: '/',
      maxAge: 15 * 60 * 1000
    })

    res.cookie('refresh_token', tokens.refresh_token, {
      httpOnly: true,
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd,
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
  }

  private clearAuthCookies(res: Response) {
    const isProd = process.env.NODE_ENV === 'production'

    res.cookie('access_token', {
      httpOnly: true,
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd,
      path: '/',
    })

    res.cookie('refresh_token', {
      httpOnly: true,
      sameSite: isProd ? 'none' : 'lax',
      secure: isProd,
      path: '/',
    })
  }

}