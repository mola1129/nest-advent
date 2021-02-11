import { Body, Controller, Post } from '@nestjs/common';
import { CreateItemDTO } from './items.dto';

@Controller('items')
export class ItemsController {
  // DTO クラスを型として指定することで，
  // Body はそのクラスのインスタンスとして認識される
  //   express のように req.body などを直接触る訳ではなく，
  // ある程度抽象化された形で渡ってくる
  @Post()
  createItem(@Body() createItemDTO: CreateItemDTO) {
    return;
  }
}
