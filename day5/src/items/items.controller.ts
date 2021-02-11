import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateItemDTO, DeleteItemDTO } from './items.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getItems() {
    const items = await this.itemsService.getItems();
    return items;
  }

  @Post()
  async createItem(@Body() { title, body, deletePassword }: CreateItemDTO) {
    const item = await this.itemsService.createItem(
      title,
      body,
      deletePassword,
    );
    return item;
  }

  //　HTTP DELETE では Payloadを付与できない
  // 代わりに POST を使用する
  @Post(':itemId/delete')
  async deleteItem(
    @Param('itemId') itemId: string,
    @Body() deleteItemDTO: DeleteItemDTO,
  ) {
    const item = this.itemsService.findItemById(+itemId);

    // 異常系のレスポンス
    if (!item) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Missing item(id: ${itemId})`,
        },
        404,
      );
    }

    try {
      await this.itemsService.deleteItemByPassword(
        +itemId,
        deleteItemDTO.deletePassword,
      );
    } catch (e) {
      if (e.message === 'Incorrect password') {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Incorrect password',
          },
          403,
        );
      }

      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
    return;
  }
}
