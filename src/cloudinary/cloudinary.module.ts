import { Module } from "@nestjs/common";
import { CloudinarySerivce } from "./cloudinary.service";

@Module({
  providers: [CloudinarySerivce],
  exports: [CloudinarySerivce]
})

export class cloudinaryModule {}