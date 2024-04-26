import { injectable } from 'tsyringe';

import {
  ITokenManagerProvider,
  IPayload,
  ISignOptions,
} from '@infra/providers/TokenManagerProvider/ITokenManagerProvider';

@injectable()
export class FakeTokenManagerProvider implements ITokenManagerProvider {
  async sign(
    info: IPayload,
    _secret: string,
    _options: ISignOptions,
  ): Promise<string> {
    return `${JSON.stringify(info)}token`;
  }

  async verify(token: string, _secret: string): Promise<IPayload | Error> {
    if (token.endsWith('token')) {
      return JSON.parse(token.substring(0, token.indexOf('token')));
    }
    return new Error('invalid token');
  }
}
