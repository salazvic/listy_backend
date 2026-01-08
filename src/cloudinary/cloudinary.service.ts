import { Injectable } from "@nestjs/common";
import cloudinary from "./cloudinary.config";
import { Readable } from "stream";

@Injectable()
export class CloudinarySerivce {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET
    });
  }

  uploadImage(
    file: Express.Multer.File,
    folder = 'items'
  ): Promise<{secureUrl: string; publicId: string}> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream(
        {folder},
        (error, result) => {
          if(error) return reject(error)
          if(!result?.secure_url) {
            return reject(new Error('Cloudinary no devolvio datos validos'))
          }
          resolve({
            secureUrl: result.secure_url,
            publicId: result.public_id
          })
        },
      )
      Readable.from(file.buffer).pipe(upload)
    })
  }

  async deleteImage(public_id: string) {
    await cloudinary.uploader.destroy(public_id)
  }
}

