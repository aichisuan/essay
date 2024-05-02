import Jwt from 'jsonwebtoken';

export const tokenConfig = {
  secret: 'token',
  refreshTokenSecret: 'refreshToken',
  tokenLife: 60 * 60,
  refreshTokenLife: 60 * 60 * 24,
};

export const addToken = (userId: number, secret: Jwt.Secret, time: number = 60 * 60 * 24) => {
  return Jwt.sign({ userId }, secret, { expiresIn: time });
};


export const verifyToken = (token: string, secret: Jwt.Secret) => {
  try {
    return Jwt.verify(token, secret);
  } catch (error) {
    return false;
  }
}

export const refreshVerifyToken = (token: string, secret: Jwt.Secret, time: number = 60 * 60 * 24) => {
  const { userId } = verifyToken(token, secret) as { userId: number } || {};
  if (!userId) return false;
  try {
    addToken(userId, tokenConfig.secret, tokenConfig.tokenLife);
    addToken(userId, tokenConfig.refreshTokenSecret, tokenConfig.refreshTokenLife);
    return true;
  } catch (error) {
    throw new Error('refresh token error');
    return false;
  }
  
}