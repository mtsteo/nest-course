import { CreateDogDto } from '../../dog/dto/create-dog.dto';
import { DogEntity } from '../../dog/entity/dog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SqliteService {
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
