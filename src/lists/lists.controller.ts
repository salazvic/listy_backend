import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ListsService } from "./lists.service";
import { UserId } from "src/decorator/user-id.decorator";
import { createListDto, editListDto } from "./dto/lists.dto";

@Controller('lists')
export class ListController {
  constructor (
    private listsService: ListsService,
  ) {}

  @Post()
  createList(
    @Body('name') name: string,
    @UserId() ownerId: string
  ) {
    const newList = {
      name,
      ownerId
    }
    return this.listsService.createList(newList)
  }

  @Get()
  getLists(
    @UserId() ownerId: string
  ){
    return this.listsService.getUserLists(ownerId)
  }

  @Get('/:id')
  async getOneList(
    @Param('id') id: string,
    @UserId() userId: string
  ) {
    const list = await this.listsService.getOneList(id, userId)
    return list
  }

  @Patch('/:id')
  editList(
    @Param('id') id: string,
    @Body() dto: editListDto,
    @UserId() ownerId: string
  ) {
    return this.listsService.editList(id, dto, ownerId)
  }

  @Delete('/:id')
  deleteList(
    @Param('id') id: string,
    @UserId() ownerId: string
  ) {
    return this.listsService.deleteList(id, ownerId)
  }
}