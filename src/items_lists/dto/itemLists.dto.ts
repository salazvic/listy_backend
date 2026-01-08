import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class crateItemListDto {
  @IsString()
  itemId: string;

  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}

export class updateItemListDto {
  @IsString()
  id: string;
  
  @IsOptional()
  @IsNumber()
  quantity?: number;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsBoolean()
  purchased: boolean;

  @IsOptional()
  @IsString()
  purchasedById?: string
}

export class deleteITemListDto {
  @IsString()
  idItemList: string;
}
