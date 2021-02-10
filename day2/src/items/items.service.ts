import { Injectable } from '@nestjs/common';

// TODO: interface と type の違い
export interface Item {
  id: number;
  title: string;
  body: string;
  deletePassword: string;
}

export type PublicItem = Omit<Item, 'deletePassword'>;

const items: Item[] = [
  {
    id: 1,
    title: 'Item title',
    body: 'Hello, World',
    deletePassword: '1234',
  },
];

// 依存関係の解決において，注入可能なオブジェクト
@Injectable()
export class ItemsService {
  getAllItems(): Item[] {
    return [...items];
  }

  getPublicItems(): PublicItem[] {
    return this.getAllItems().map((item) => {
      const publicItem = { ...item };
      // プロパティを削除する
      delete publicItem.deletePassword;
      return publicItem;
    });
  }

  getItemById(id: number): PublicItem | undefined {
    return this.getPublicItems().find((item) => item.id === id);
  }
}
