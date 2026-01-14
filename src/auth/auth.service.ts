import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/auth.dto';
import { PinoLogger } from 'nestjs-pino';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersGateway } from 'src/sockets/gateway/users.gateway';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private readonly logger: PinoLogger,
    private prisma: PrismaService,
    private userGateway: UsersGateway
  ) {}

  async register(data: RegisterDto) {
    const exists = await this.userService.findByEmail(data.email);
    if (exists) throw new BadRequestException('El email ya existe');

    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.userService.create({
      ...data,
      password: hash,
    });

    this.userGateway.emitUserProfile({
      id: user.id,
      name: user.name,
      email: user.email
    })
    return user
  }

  async login(email: string, password: string) {
    const user = await this.userService.findByEmail(email.toLowerCase());
    if (!user) throw new UnauthorizedException('Usuario no encontrado');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new UnauthorizedException('Contraseña invalida');

    const tokens = await this.generateTokens(user.id, user.name);
    await this.updateRefreshToken(user.id, tokens.refresh_token);
    
    return { 
      access: {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
      },
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    };
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
    return {ok: true}
  }

  async getMe(userId: string) {
    return this.prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true,
        name: true,
        email: true
      }
    })
  }

  async refresh(refreshToken: string) {
    let payload: any

    try {
      payload = await this.jwtService.verifyAsync(
        refreshToken,
        { secret: process.env.JWT_SECRET}
      )
    } catch (error) {
      throw new UnauthorizedException('Refresh token invalido')
    }

    const user = await this.prisma.user.findUnique({
      where: {id: payload.sub}
    })

    if(!user || !user.refreshToken) {
      throw new UnauthorizedException()
    }

    const isValid = await bcrypt.compare(refreshToken, user.refreshToken)
    if (!isValid) throw new ForbiddenException()

    const tokens = await this.generateTokens(user.id, user.name)
    await this.updateRefreshToken(user.id, tokens.refresh_token)

    return {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token
    }
  }

  async deleteUSer(id: string) {
    return this.userService.delete(id);
  }

  async updateRefreshToken(userId: string, refresh_token: string) {
    const hash = await bcrypt.hash(refresh_token, 10);

    await this.prisma.user.update({
      where: {id: userId},
      data: {refreshToken: hash},
    })
  }

  async generateTokens(userId: string, name: string) {
    const payload = { sub: userId, name}

    const [access_token, refresh_token] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JET_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JET_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return { access_token, refresh_token}
  }

}
