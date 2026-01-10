import { Body, Controller, Delete, Get, Post, Req, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto } from "./dto/auth.dto";
import { Public } from "../decorator/public.decorator";
import { UserId } from "../decorator/user-id.decorator";
import type { Response } from "express";
import { Logger, PinoLogger } from "nestjs-pino";
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
    const data = await this.authService.login(dto.email, dto.password);

    res.cookie('access_token', data.access.access_token, {
      httpOnly: true,
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60 *  1000
    })

    res.cookie('refresh_token', data.access.refresh_token, {
      httpOnly: true,
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return data
  }

  @Delete('delete')
  deletMe(@Req() req) {
    return this.authService.deleteUSer(req.user.sub)
  }

  @Post('logout')
  logout(
    @Res() req: Request,
    @Res({ passthrough: true }) res: Response,
    @UserId() userId: string
  ) {
    res.clearCookie('access_token', {
      httpOnly: true,
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })

    res.clearCookie('refresh_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
      path: '/'
    })

    return this.authService.logout(userId)
  }

  @Public()
  @Post('refresh')
  refresh(@Req() req, @Res({ passthrough: true }) res) {
    const refreshToken = req.cookies.refresh_token
    if (!refreshToken) throw new UnauthorizedException()

    const payload = this.jwt.verify(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET
    })

    const newAccess = this.jwt.sign(
      { sub: payload.sub, name: payload.name },
      { expiresIn: '15m' }
    )

    res.cookie('access_token', newAccess, {
      httpOnly: true,
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production'
    })

    return { ok: true }
  }

  @Get('me')
  async me(@Req() req) {
    const user = req.user
    if (!user) {
      throw new UnauthorizedException
    }
    return this.authService.getMe(user.sub)
  }

  /* @Post('invite')
  async inviteUSer(@Body('email') emailData: any ) {
    // TODO: ENDPOINT PARA USAR CON RESEND NO ESTA EN USO AHORA
    return this.mail.sendEmail({
      to: emailData?.email,
      subject: `Te invitaron a la lista ${emailData?.listName}`,
      html:`
        <h2>${emailData?.userName} te invito a una lista</h2>
        <p>Te invitaron a colaborar en la lista <b>${emailData?.listName}</b>.</p>
        <a href="${process.env.ORIGIN}/register" style="
          display:inline-block;
          padding:10px 16px;
          background:#000;
          color:#fff;
          text-decoration:none;
          border-radius:6px;
        ">
          Aceptar invitación
        </a>
        <p style="margin-top:20px;color:#666">
          Si no esperabas este correo, ignoralo.
        </p>
      `
    })
  } */
}