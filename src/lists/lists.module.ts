import { Module } from "@nestjs/common";
import { ListsService } from "./lists.service";
import { ListController } from "./lists.controller";
import { SocketModule } from "src/sockets/socket.module";

@Module({
  imports: [SocketModule],
  providers: [ListsService],
  controllers: [ListController],
  exports: [ListsService]
})

export class ListsModule { }