import { INestApplicationContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';

export class SocketAdapter extends IoAdapter {
  constructor(private app: INestApplicationContext) {
    super(app)
  }

  createIOServer(port: number, options?: ServerOptions): Server {
    const server: Server = super.createIOServer(port, {
      ...options,
      cors: {
        origin: process.env.ORIGIN,
        credentials: true,
        methods: ["GET", "POST"]
      }, 
    });

    const jwtService = this.app.get(JwtService)

    server.use((socket, next) => {
      try {
        const cookie = socket.handshake.headers.cookie
        if(!cookie) throw new Error('No cookie')

        const accessToken = cookie
        .split('; ')
        .find(c => c.startsWith('access_token='))
        ?.split('=')[1]

        if (!accessToken) throw new Error('No access token')

        const payload = jwtService.verify(accessToken, {
          secret: process.env.JWT_SECRET
        })

        socket.data.user = payload
        socket.data.userId = payload.sub

        next()
      } catch (error) {
        next(new Error('Unauthorized'))
      }
    })
    return server;
  }
}