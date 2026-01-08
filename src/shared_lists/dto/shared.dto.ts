import { IsString } from "class-validator"
import { SharedRole } from "src/enums/shared-role.enum";

export class createSharedDto {
  @IsString()
  userId: string;

  @IsString()
  role: SharedRole
}

export class editSharedDto {
  @IsString()
  id: string;

  @IsString()
  role: SharedRole
}
