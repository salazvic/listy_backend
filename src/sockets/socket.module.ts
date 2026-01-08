import { Module } from "@nestjs/common";
import { ListsGateway } from "./gateway/lists.gateway";
import { UsersGateway } from "./gateway/users.gateway";

@Module({
  providers: [
    ListsGateway,
    UsersGateway
  ],
  exports: [
    ListsGateway,
    UsersGateway
  ]
})
export class SocketModule {}