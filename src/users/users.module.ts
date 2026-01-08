import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserController } from "./users.controller";

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService]
})

export class UsersModule{}