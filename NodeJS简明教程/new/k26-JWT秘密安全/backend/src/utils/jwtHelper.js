import AppError from './AppError.js';
import * as jose from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function generateToken(data) {
  const token = await new jose.SignJWT({data}).setProtectedHeader({alg: 'HS256'}).setExpirationTime('20s').sign(JWT_SECRET)

  return token;
}

export async function verifyToken(token) {
  try {
    await jose.jwtVerify(token, JWT_SECRET);

  } catch (error) {
    throw new AppError(error.message || 'Invalid token', 401, error.name);
  }
}
