import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { UsersGateway } from "src/sockets/gateway/users.gateway";
import { UsersModule } from "src/users/users.module";
import { SocketModule } from "src/sockets/socket.module";
import { MailModule } from "src/mail/mail.module";

@Module({
  imports: [
    UsersModule,
    SocketModule,
    MailModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: '15m'
        }
      })
    })
    ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule{}
