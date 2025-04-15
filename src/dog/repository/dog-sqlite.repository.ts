import { InjectRepository } from '@nestjs/typeorm';
import { CreateDogDto } from '../dto/create-dog.dto';
import { IDogsRepository } from '../interfaces/dog-repository.interface';
import { DogEntity } from '../entity/dog.entity';
import { Repository } from 'typeorm';

export class SqliteDogRepository implements IDogsRepository {
  constructor(
    @InjectRepository(DogEntity)
    private readonly dogRepository: Repository<DogEntity>,
  ) {}
  async create(CreateDogDto: CreateDogDto) {
    const created = this.dogRepository.create({
      color: CreateDogDto.color,
      name: CreateDogDto.name,
    });
    return this.dogRepository.save(created);
  }

  async findAll(): Promise<CreateDogDto[]> {
    return this.dogRepository.find({});
  }
}
