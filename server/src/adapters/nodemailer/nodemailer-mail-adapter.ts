import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "20a103402e6f0e",
      pass: "0c0fee6adf67b3"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject,body}: SendMailData) {
        
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'John Rodrigues <johnrodrigues97106@gmail.com>',
        subject: subject,
        html: body,
    })
    };

}