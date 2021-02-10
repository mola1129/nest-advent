import { AppController } from './app.controller';
import { AppService, PublicItem } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    appService = new AppService();
    // Module を使わずに注入することで，実際の Service に依存しなくなる
    // 切った依存部分は，個別にユニットテストをする必要がある
    appController = new AppController(appService);
  });

  describe('/items', () => {
    it('should return public items', () => {
      // mock の作成
      jest.spyOn(appService, 'getPublicItems').mockImplementation(() => {
        const item: PublicItem = {
          id: 1,
          title: 'Mock Title',
          body: 'Mock Body',
        };
        return [item];
      });

      // TODO: getItems のテストが必要
      expect(appController.getItems()).toHaveLength(1);
    });
  });
});
