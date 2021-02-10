import { Controller, Get } from '@nestjs/common';

// リクエストに関するレスポンス返却への関心を持つ
@Controller()
export class AppController {
  @Get()
  getHello() {
    return 'Hello, World';
  }
}
