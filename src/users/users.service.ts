import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    });
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  create(data: RegisterDto) {
    return this.prisma.user.create({ data });
  }

  delete(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
