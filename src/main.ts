import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { SocketAdapter } from './sockets/socket.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3001

  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  })
  app.useWebSocketAdapter(new SocketAdapter(app))
  app.use(cookieParser());

  process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION', err)
  })
  process.on('unhandledRejection', (reason) => {
    console.log('UNHANDLED EXCEPTION', reason)
  })
  
  const prisma = app.get(PrismaService);
  await prisma.$connect();

  await app.listen(port, (() => {
    console.log('Server on ' + port)
  }));

  console.log(`Application is running on: ${process.env.PORT}`);
}
bootstrap();
