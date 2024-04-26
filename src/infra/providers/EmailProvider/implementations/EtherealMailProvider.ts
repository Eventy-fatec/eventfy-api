import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { injectable } from 'tsyringe';

import { IEmailProvider, IMessage } from '../IEmailProvider';

@injectable()
export class EtherealMailProvider implements IEmailProvider {
  private transporter: Mail;

  constructor() {
    nodemailer
      .createTestAccount()
      .then(account => {
        this.transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });
      })
      .catch(error => console.error(`Error on send Email: ${error}`));
  }

  async sendMail(message: IMessage): Promise<void> {
    const sentMessage = await this.transporter.sendMail({
      to: message.to.map(to => ({
        name: to.name,
        address: to.email,
      })),
      from: {
        name: 'Project Manager',
        address: 'noreplay@project_manager.com.br',
      },
      subject: message.subject,
      html: message.body,
    });

    console.log(`Message sent to: ${sentMessage.messageId}`);
    console.log(`Preview URL: ${nodemailer.getTestMessageUrl(sentMessage)}`);
  }
}
