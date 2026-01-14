import { INestApplicationContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';
import cookie from 'cookie'

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
        const rawCookie = socket.handshake.headers.cookie
        if(!rawCookie) throw new Error('No cookies')

        const parsed = cookie.parse(rawCookie)
        const token = parsed.access_token
        if(!token) throw new Error('No access token')

        const payload = jwtService.verify(token, {
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