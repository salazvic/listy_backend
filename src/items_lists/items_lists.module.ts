import { Module } from "@nestjs/common";
import { ItemsListsGateway } from "src/sockets/gateway/itemsLists.gateway";
import { ItemsListService } from "./items_lists.service";
import { ItemListController } from "./items_lists.controller";
import { ListsModule } from "src/lists/lists.module";

@Module({
  imports: [ListsModule],
  providers: [ItemsListsGateway, ItemsListService],
  controllers: [ItemListController]
})
 
export class ItemsListModule{}