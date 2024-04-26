export type IPayload = string | object | Buffer;

export type ISignOptions = {
  expiresIn?: string;
  subject?: string;
};

export interface ITokenManagerProvider {
  sign(info: IPayload, secret: string, options: ISignOptions): Promise<string>;
  verify(token: string, secret: string): Promise<IPayload | Error>;
}
