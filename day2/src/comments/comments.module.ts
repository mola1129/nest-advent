import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  // 外部で使用するためには export する
  // export して，はじめて他の Module から参照可能になる
  exports: [CommentsService],
})
export class CommentsModule {}
