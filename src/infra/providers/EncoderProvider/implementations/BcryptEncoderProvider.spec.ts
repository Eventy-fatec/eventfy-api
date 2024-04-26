import { BcryptEncoderProvider } from './BcryptEncoderProvider';

describe('Bcrypt encoder provider', () => {
  it('should correctly encode and decode a string', async () => {
    const encoder = new BcryptEncoderProvider(8);
    const password = 'my password';
    const encodedPassword = await encoder.encode(password);
    expect(password).not.toEqual(encodedPassword);
    expect(await encoder.compare(password, encodedPassword)).toBeTruthy();
  });
});
