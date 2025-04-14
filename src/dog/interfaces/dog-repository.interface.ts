import { CreateDogDto } from '../dto/create-dog.dto';

export interface IDogsRepository {
  create: (data: CreateDogDto) => Promise<CreateDogDto>;
  findAll: () => Promise<CreateDogDto[]>;
}
