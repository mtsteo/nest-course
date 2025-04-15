import { Inject, Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { DOG_REPOSITORY } from '../_database/tokens';
import { IDogsRepository } from './interfaces/dog-repository.interface';

@Injectable()
export class DogService {
  constructor(
    @Inject(DOG_REPOSITORY) private readonly dogRepository: IDogsRepository,
  ) {}
  create(createDogDto: CreateDogDto) {
    return this.dogRepository.create(createDogDto);
  }

  findAll() {
    return this.dogRepository.findAll();
  }
}
