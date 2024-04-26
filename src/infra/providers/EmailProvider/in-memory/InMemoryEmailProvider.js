import { IEmailProvider, IMessage } from '../IEmailProvider';

export class InMemoryEmailProvider implements IEmailProvider {
  async sendMail(
    message: IMessage,
    _meta?: Record<string, unknown>,
  ): Promise<void> {
    message.to.forEach(to => console.log(`Email sended to ${to.name}`));
  }
}
