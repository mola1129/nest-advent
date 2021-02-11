import { IsNotEmpty, IsString } from 'class-validator';

// https://github.com/typestack/class-validator
// DTO レイヤーでバリデーションを行うことで，
// Controller では適切なデータが到達することが保証される
// そのため，Controllerでは 純粋な Controller の責務のみに集中できる
export class CreateItemDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  deletePassword: string;
}
