import * as jwt from 'jsonwebtoken';
import { injectable } from 'tsyringe';

import {
  ITokenManagerProvider,
  IPayload,
  ISignOptions,
} from '@infra/providers/TokenManagerProvider/ITokenManagerProvider';

@injectable()
export class JwtTokenManagerProvider implements ITokenManagerProvider {
  async sign(
    info: IPayload,
    secret: string,
    options: ISignOptions,
  ): Promise<string> {
    return jwt.sign(info, secret, {
      expiresIn: options?.expiresIn ?? '1d',
      subject: options?.subject || undefined,
    });
  }

  async verify(token: string, secret: string): Promise<IPayload | Error> {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      throw new Error('Invalid jwt token');
    }
  }
}
