import { ApiProperty } from '@nestjs/swagger';

// @ApiProperty: Swagger にスキーマ生成の対象であることを伝える
export class Item {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
