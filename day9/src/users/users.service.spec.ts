import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const users = [
      {
        id: 1,
        screenName: 'potato4d',
        password:
          '6c614c4e12595a345079b78df3f5e702c6e7ecacae2e4a0430880666ccc55bb3', // "test"
      },
    ];
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          // モックとなるオブジェクトを用意したレポジトリを作成
          // DB へのアクセスを防ぎ，Service を Unit Test 出来る
          // RDB への CRUD が支配的 => DB 依存のテスト
          // RDB への CRUD 以外のビジネスロジックが豊富 => Service でモック化
          provide: getRepositoryToken(User),
          useValue: {
            findOne: ({
              where: { screenName },
            }: {
              where: { screenName: string };
            }) => users.find((user) => user.screenName === screenName),
            insert: (entity) => users.push(entity),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    test('CREATED', async () => {
      expect.assertions(1);

      const registerPromise = service.register({
        screenName: 'potato4d',
        password: '12345',
      });

      await expect(registerPromise).rejects.toThrow('User is already taken.');
    });
  });
});
