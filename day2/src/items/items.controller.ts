import { Controller, Get, Param } from '@nestjs/common';
import { CommentsService } from '../comments/comments.service';
import { ItemsService, PublicItem } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly itemsService: ItemsService,
    private readonly commentsService: CommentsService,
  ) {}

  @Get()
  getItems(): PublicItem[] {
    return this.itemsService.getPublicItems();
  }

  @Get(':id/comments')
  getItemWithComments(@Param() param: { id: string }) {
    const item = this.itemsService.getItemById(+param.id);
    const comments = this.commentsService.getCommentsByItemId(+param.id);

    return { item, comments };
  }
}
