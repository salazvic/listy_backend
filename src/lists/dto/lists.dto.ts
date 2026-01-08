import { IsString } from "class-validator"

export class createListDto {
  @IsString()
  name: string;

  @IsString()
  ownerId: string;
}

export class editListDto {
  @IsString()
  name: string;
}
