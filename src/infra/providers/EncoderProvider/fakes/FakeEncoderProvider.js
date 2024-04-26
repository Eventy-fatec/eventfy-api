import { injectable } from 'tsyringe';

import { IEncoderProvider } from '@infra/providers/EncoderProvider/IEncoderProvider';

@injectable()
export class FakeEncoderProvider implements IEncoderProvider {
  public async encode(plain) {
    return `${plain}ENCRYPTED`;
  }

  
  public async compare(plain, hashed) {
    return `${plain}ENCRYPTED` === hashed;
  }
}
