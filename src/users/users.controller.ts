import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UserController {
  constructor (private userService: UsersService) {}

  @Get()
  getAllUSer() {
    return this.userService.findAll()
  }

  @Get(':id')
  getOneUser(
    @Param('id') id: string
  ) {
    return this.userService.findById(id)
  }
}
