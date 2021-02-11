import { Test, TestingModule } from '@nestjs/testing';
import { ItemsController } from './items.controller';
import { ItemsModule } from './items.module';
import { ItemsService } from './items.service';

class DummyItemsService {
  async createItem(title: string, body: string, deletePassword: string) {
    return;
  }
  async getItems() {
    const item = {
      id: 1,
      title: 'Dummy Title',
      body: 'Dummy Body',
    };
    return [item];
  }
}

describe('ItemsController', () => {
  let itemsController: ItemsController;
  let itemsService: ItemsService;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [ItemsModule],
    })
      // DB へ依存する ItemsService を DummyItemsService に上書き
      // MySQL が起動していなくても問題なくテストが通過するようになる
      // https://docs.nestjs.com/fundamentals/testing#end-to-end-testing
      .overrideProvider(ItemsService)
      .useClass(DummyItemsService)
      .compile();

    itemsService = testingModule.get<ItemsService>(ItemsService);
    itemsController = new ItemsController(itemsService);
  });
  describe('/items', () => {
    it('should return items', async () => {
      expect(await itemsController.getItems()).toHaveLength(1);
    });
  });
});
