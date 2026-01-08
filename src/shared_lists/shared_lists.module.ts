import { Module } from "@nestjs/common";
import { SharedListGateway } from "src/sockets/gateway/shared_lists.gateway";
import { sharedListService } from "./shared_lists.service";
import { SharedListController } from "./shared_lists.controller";
import { ListsService } from "src/lists/lists.service";
import { SocketModule } from "src/sockets/socket.module";

@Module({
  imports: [
    SocketModule
  ], 
  providers: [SharedListGateway, sharedListService, ListsService],
  controllers: [SharedListController]
})

export class SharedListsModule{}