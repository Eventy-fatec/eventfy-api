import * as bcrypt from 'bcrypt';
import { injectable } from 'tsyringe';

import { IEncoderProvider } from '@infra/providers/EncoderProvider/IEncoderProvider';

@injectable()
export class BcryptEncoderProvider implements IEncoderProvider {
  private rounds: number;

  constructor(rounds: number) {
    this.rounds = rounds;
  }

  async encode(plain: string): Promise<string> {
    return bcrypt.hash(plain, this.rounds);
  }

  async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
