import { SetMetadata } from "@nestjs/common";
import { SharedRole } from "src/enums/shared-role.enum";

export const ROLES_KEY = 'roles';

export const Roles = (...roles: SharedRole[]) =>
  SetMetadata(ROLES_KEY, roles)