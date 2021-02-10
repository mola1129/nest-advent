import { Module } from '@nestjs/common';
import { CommentsModule } from 'src/comments/comments.module';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

// Module をまたいだ DI を行うためには
// import で export された 外部 Service を読み込む
@Module({
  imports: [CommentsModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
