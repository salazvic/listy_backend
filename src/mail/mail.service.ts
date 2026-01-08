import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Resend } from 'resend'

@Injectable()
export class MailService {
  /* private resend: Resend

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY)
  }

  async sendEmail({
    to,
    subject,
    html
  }: {
    to: string,
    subject: string,
    html: string
  }) {
    try {
      const { error } = await this.resend.emails.send({
        from: process.env.RESEND_FROM!,
        to,
        subject,
        html
      })

      if(error) {
        throw new Error(error.message)
      }
    } catch (err: any) {
      console.log(err)
      throw new InternalServerErrorException('Error enviando correo')
    }
  } */
}