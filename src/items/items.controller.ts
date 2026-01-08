import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express'
import { ItemsService } from "./items.service";
import { createItemDto, updateItemDto } from "./dto/item.dto";

@Controller('items')
export class ItemsController {
  constructor (private itemsService: ItemsService) {}
  
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createItem(
    @Body() body: createItemDto,
    @UploadedFile() file?: Express.Multer.File
  ){
    return this.itemsService.createItem(body, file)
  }

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems()
  }

  @Get(':id')
  getOneItem(
    @Param('id') id: string
  ) {
    return this.itemsService.getOneItem(id)
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  updateItem(
    @Param('id') id: string,
    @Body() body: updateItemDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return this.itemsService.updateItem(id, body, file)
  }

  @Delete(':id')
  deleteItem(
    @Param('id') id: string
  ) {
    return this.itemsService.deleteItem(id)
  }
}