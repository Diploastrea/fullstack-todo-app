import jwt from 'jsonwebtoken';
import { config } from '../config';

export function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(' ')[1];
    const decodedToken = jwt.verify(token, config.access_secret);
    req.headers.user = {
      id: decodedToken.id,
      name: decodedToken.name,
    };
    return next();
  } catch (err) {
    return res.status(401).json({
      status: 'error',
      message: 'Invalid token',
    });
  }
}
