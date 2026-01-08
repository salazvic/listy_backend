import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "src/decorator/roles.decorator";
import { SharedRole } from "src/enums/shared-role.enum";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SharedListRoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<SharedRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if(!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const userId = request.user.sub;
    const listId = request.params.listId || request.body.listId
    if(!listId) throw new ForbiddenException('Id List requerido')

    // ES OWNER
    const list = await this.prisma.list.findUnique({
      where: {id: listId},
      select: {ownerId: true}
    })

    if(list?.ownerId === userId) return true

    // ES USUARIO COMPARTIDO
    const shared = await this.prisma.sharedList.findUnique({
      where: {
        listId_userId: {listId, userId}
      },
      select: {role: true}
    })
    console.log("shared guard:", shared)

    if(!shared) throw new ForbiddenException('No tiene acceso')

    if(!requiredRoles.includes(shared.role as SharedRole)) {
      throw new ForbiddenException('Permisos insuficientes')
    }

    return true
  }
}