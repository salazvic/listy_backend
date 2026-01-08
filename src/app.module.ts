import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { ListsModule } from './lists/lists.module';
import { ItemsModule } from './items/items.module';
import { SharedListsModule } from './shared_lists/shared_lists.module';
import { UsersModule } from './users/users.module';
import { ItemsListModule } from './items_lists/items_lists.module';
import { JwtGuard } from './guards/jwt.guard';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
    JwtModule.registerAsync({
      global: true,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: {expiresIn: '15m'}
      })
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
            translateTime: 'SYS:standard',
          },
        },
      },
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ListsModule,
    ItemsModule,
    SharedListsModule,
    ItemsListModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard
    }
  ],
})
export class AppModule {}
