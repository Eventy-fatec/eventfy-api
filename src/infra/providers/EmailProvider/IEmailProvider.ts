interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress[];
  subject: string;
  body: string;
}

export interface IEmailProvider {
  sendMail(message: IMessage, meta?: Record<string, unknown>): Promise<void>;
}
