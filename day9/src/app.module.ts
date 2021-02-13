import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    // typeORM の createConnection をラップした形の機能
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'nestday9',
      entities: [User],
      // 開発環境用: 自動マイグレーション
      synchronize: true,
    }),
    UsersModule,
  ],
  providers: [UsersService],
})
export class AppModule {}
