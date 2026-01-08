import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { sharedListService } from "./shared_lists.service";
import { createSharedDto, editSharedDto } from "./dto/shared.dto";
import { SharedListRoleGuard } from "./guards/SharedListRoleGuard";
import { Roles } from "src/decorator/roles.decorator";
import { SharedRole } from "src/enums/shared-role.enum";
import { UserId } from "src/decorator/user-id.decorator";

 @Controller('shared_lists')
 export class SharedListController {
  constructor (private sharedService: sharedListService) {}

  @Post(':listId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER)
  addUser(
    @Param('listId') listId: string,
    @Body() dto: createSharedDto,
    @UserId() idUser: string
  ) {
    return this.sharedService.addedUser(dto, listId, idUser)
  }

  @Patch(':listId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER)
  updateRol(
    @Param('listId') listId: string,
    @Body() dto: editSharedDto
  ) {
    return this.sharedService.updateRol(dto, listId)
  }

  @Delete(':listId/:sharedId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER)
  deleteUserShared(
    @Param('listId') listId: string,
    @Param('sharedId') sharedId: string,
  ) {
    return this.sharedService.deleteUser(listId, sharedId)
  }

  @Get()
  getMySharedList(
    @UserId() idUser: string
  ) {
    return this.sharedService.getMyAllSharedList(idUser)
  }

  @Get(':listId/sharedId')
  async getUsersList(
    @Param('listId') listId: string,
  ) {
    const data = await this.sharedService.getUsersList(listId)
    return data
  }
 }