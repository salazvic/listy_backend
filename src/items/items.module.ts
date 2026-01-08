import { Module } from "@nestjs/common";
import { ItemsGateway } from "src/sockets/gateway/items.gateway";
import { ItemsService } from "./items.service";
import { ItemsController } from "./items.controller";
import { cloudinaryModule } from "src/cloudinary/cloudinary.module";

@Module({
  imports: [ cloudinaryModule],
  providers: [ItemsGateway, ItemsService],
  controllers: [ItemsController]
})

export class ItemsModule{}