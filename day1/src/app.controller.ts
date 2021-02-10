import { Controller, Get } from '@nestjs/common';
import { AppService, PublicItem } from './app.service';

// リクエストに関するレスポンス返却への関心を持つ
@Controller()
export class AppController {
  // Nestjs の機能により，コンストラクタの引数に
  // クラスの型を持ったインスタンスを定義すると
  // 自動的にそのインスタンスを this に格納する
  //  this.appService (AppService)
  // Contructor Injection
  constructor(private readonly appService: AppService) {}

  // 関数の戻り値をベースにレスポンスを定義出来る
  @Get('items')
  getItems(): PublicItem[] {
    return this.appService.getPublicItems();
  }
}
