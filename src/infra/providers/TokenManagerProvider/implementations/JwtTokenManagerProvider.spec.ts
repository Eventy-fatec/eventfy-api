import { JwtTokenManagerProvider } from './JwtTokenManagerProvider';

describe('JWT token manager provider', () => {
  it('should correctly sign and verify a json web token', async () => {
    const secret = 'my secret';
    const tokenManager = new JwtTokenManagerProvider();

    const signedToken = await tokenManager.sign({}, secret, {
      expiresIn: '1d',
      subject: 'my id',
    });

    const response = await tokenManager.verify(signedToken, secret);

    expect(response).toEqual(
      expect.objectContaining({
        sub: 'my id',
      }),
    );
  });

  it('should correctly verify invalid json web token', async () => {
    const secret = 'my secret';
    const tokenManager = new JwtTokenManagerProvider();

    const signedToken = await tokenManager.sign({}, secret, {
      expiresIn: '1d',
      subject: 'my id',
    });

    const invalidToken = `${signedToken}some trash`;

    await expect(tokenManager.verify(invalidToken, secret)).rejects.toEqual(
      new Error('Invalid jwt token'),
    );
  });
});
