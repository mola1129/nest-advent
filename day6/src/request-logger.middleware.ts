import { Logger } from '@nestjs/common';
import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from 'express';

// NextJS はデフォルトで express のエンジンを使うため，
// express の作法で middleware を記述することが出来る．
export function requestLogger(
  logger: Logger,
): (req: ExpressRequest, res: ExpressResponse, next: () => void) => void {
  return (req, res, next): void => {
    res.on('finish', (): void => {
      logger.verbose(`${req.method} ${req.url} -> ${res.statusCode}`);
    });
    next();
  };
}
