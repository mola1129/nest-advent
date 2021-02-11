import { IsNotEmpty, IsString } from 'class-validator';

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

export class DeleteItemDTO {
  @IsString()
  @IsNotEmpty()
  deletePassword: string;
}
