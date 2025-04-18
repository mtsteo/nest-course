import { IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsString()
  color: string;
}
