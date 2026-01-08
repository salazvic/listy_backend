import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ItemsGateway } from "src/sockets/gateway/items.gateway";
import { createItemDto, updateItemDto } from "./dto/item.dto";
import { CloudinarySerivce } from "src/cloudinary/cloudinary.service";

@Injectable()
export class ItemsService {
  constructor(
    private prisma: PrismaService,
    private itemGateway: ItemsGateway,
    private cloudinary: CloudinarySerivce
  ){}

  async createItem(
    data: createItemDto,
    file?: Express.Multer.File
  ) {
    let imageData = {}
    if(file) {
      const uploaded = await this.cloudinary.uploadImage(file)

      imageData = {
        imageUrl: uploaded.secureUrl,
        imagePublicId: uploaded.publicId
      }
    }

    const newItem = await this.prisma.item.create({
      data: {
        name: data.name,
        ...imageData,
      }
    })

    this.itemGateway.emitItemCreate(newItem)
    return newItem
  } 

  async getAllItems() {
    return this.prisma.item.findMany()
  }

  async getOneItem(id: string) {
    return this.prisma.item.findUnique({where: {id}})
  }

  async updateItem(
    id: string,
    dto: updateItemDto,
    file?: Express.Multer.File
  ) {
    const exist = await this.getOneItem(id)
    if(!exist) throw new BadRequestException('No existe el item')

    let imageData = {}

    if(file) {
      if(exist.imagePublicId) {
        await this.cloudinary.deleteImage(exist.imagePublicId)
      }

      const uploaded = await this.cloudinary.uploadImage(file)

      imageData = {
        imageUrl: uploaded.secureUrl,
        imagePublicId: uploaded.publicId
      }
    }

    const updateItem = this.prisma.item.update({
      where: {id},
      data: {
        name: dto.name,
        ...imageData
      }
    })

    this.itemGateway.emitItemUpdated(updateItem)
    return updateItem
  }

  async deleteItem(id: string) {
    const exist = await this.getOneItem(id)
    if(!exist) throw new BadRequestException('No existe el item')

    if(exist.imagePublicId) {
      await this.cloudinary.deleteImage(exist.imagePublicId)
    }

    const deleteItem = await this.prisma.item.delete({where: {id}})

    this.itemGateway.emitItemDeleted(deleteItem)
    return deleteItem
  }
}