import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { requestLogger } from './request-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: config.logLevel });
  const logger = new Logger();
  app.useLogger(logger);
  // express と同様の middleware 設定
  app.use(requestLogger(logger));
  // デフォルトでは全許可する
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
