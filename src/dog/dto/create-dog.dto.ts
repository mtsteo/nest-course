import { IsString } from 'class-validator';

export class CreateDogDto {
  @IsString()
  name: string;
  @IsString()
  color: string;
}
