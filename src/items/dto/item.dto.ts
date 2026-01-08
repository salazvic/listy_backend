import { IsOptional, IsString } from "class-validator";

export class createItemDto {
  @IsString()
  name: string;
}

export class updateItemDto {
  @IsString()
  id: string;
  
  @IsOptional()
  @IsString()
  name: string;
}