import { Injectable } from '@nestjs/common';
import { CreateDogDto } from '../../../dog/dto/create-dog.dto';
import { IDogsRepository } from '../../../dog/interfaces/dog-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { DogEntity } from '../../../dog/entity/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PgDogRepository implements IDogsRepository {
  constructor(
    @InjectRepository(DogEntity)
    private readonly dogRepository: Repository<DogEntity>,
  ) {}
  async create(dog: CreateDogDto): Promise<DogEntity> {
    const created = this.dogRepository.create({
      name: dog.name,
      color: dog.color,
    });
    const saved = await this.dogRepository.save(created);

    return saved;
  }

  async findAll(): Promise<DogEntity[]> {
    const dogs = await this.dogRepository.find();
    return dogs;
  }
}
