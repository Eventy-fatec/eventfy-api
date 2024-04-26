import { injectable } from 'tsyringe';

import { IEncoderProvider } from '@infra/providers/EncoderProvider/IEncoderProvider';

@injectable()
export class FakeEncoderProvider implements IEncoderProvider {
  public async encode(plain: string): Promise<string> {
    return `${plain}ENCRYPTED`;
  }

  public async compare(plain: string, hashed: string): Promise<boolean> {
    return `${plain}ENCRYPTED` === hashed;
  }
}
