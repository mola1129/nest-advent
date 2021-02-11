import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // ヴァリデーションによる詳細なエラーを非表示にする
      // Production ではこちらの方が良い
      disableErrorMessages: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
