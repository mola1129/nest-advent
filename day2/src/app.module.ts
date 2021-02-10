import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ItemsModule } from './items/items.module';
import { CommentsModule } from './comments/comments.module';

// Controller と Service をまとめるところ
// 主に依存関係の解消を担う
@Module({
  imports: [ItemsModule, CommentsModule],
  controllers: [AppController],
  // Service は Module の Providerとして定義する
  // この定義により，Controllerへの依存オブジェクトの注入を実行する
  // Module によって，Service と Controller が密結合であることが解消され，
  // 再利用しやすいクリーンなコードとなる．
})
export class AppModule {}

// Nestjsは
// Controller かどうか
// Module かどうか
// そうでないものは Service として実装し，
// Provider として提供される世界観という認識で OK
