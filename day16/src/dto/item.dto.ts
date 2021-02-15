import { ApiProperty } from '@nestjs/swagger';
import { Item } from 'src/model/item.model';

// example: OpenAPI の仕様書を使ったモックサーバのレスポンスを定義
// @stoplight/prism-cli などで モックサーバは実現可能
export class GetItemsResponse {
  @ApiProperty({ type: [Item], example: [{ id: 1, name: 'test' }] })
  items: Item[];
}

export class GetItemsRequest {
  @ApiProperty({ type: [Number], example: ['1', '2', '3'] })
  ids: Item['id'][];
}
