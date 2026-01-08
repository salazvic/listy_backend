import { Body, Controller, Delete, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { ItemsListService } from "./items_lists.service";
import { SharedListRoleGuard } from "src/shared_lists/guards/SharedListRoleGuard";
import { Roles } from "src/decorator/roles.decorator";
import { SharedRole } from "src/enums/shared-role.enum";
import { crateItemListDto, deleteITemListDto, updateItemListDto } from "./dto/itemLists.dto";
import { UserId } from "src/decorator/user-id.decorator";

@Controller('items_lists')
export class ItemListController{
  constructor (private itemListService: ItemsListService) {}

  @Post(':listId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER, SharedRole.EDITOR)
  addItem(
    @Param('listId') listId: string,
    @Body() dto: crateItemListDto
  ){
    return this.itemListService.addedItemList(listId, dto)
  }

  @Patch(':listId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER, SharedRole.EDITOR)
  updateItem(
    @Param('listId') listId: string,
    @Body() dto: updateItemListDto,
  ){
    return this.itemListService.updateItemList(listId, dto)
  }

  @Patch(':listId/mark_all')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER, SharedRole.EDITOR)
  updateMarkAllItem(
    @Param('listId') listId: string,
    @UserId() userId: string,
    @Body() dto: any,
  ){
    return this.itemListService.updateMarkAllItemList(listId, dto, userId)
  }

  @Delete(':listId/:itemId')
  @UseGuards(SharedListRoleGuard)
  @Roles(SharedRole.OWNER, SharedRole.EDITOR)
  deleteItem(
    @Param('listId') listId: string,
    @Param('itemId') itemId: string,
  ){
    return this.itemListService.deleteItemList(listId, itemId)
  }
}