import { Injectable } from '@nestjs/common';
import { ICatsRepository } from '../../../cat/interfaces/cat-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from '../../../cat/entity/cat.entity';
import { Repository } from 'typeorm';
import { CreateCatDto } from '../../../cat/dto/create-cat.dto';

@Injectable()
export class PgCatRepository implements ICatsRepository {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  async create(cat: CreateCatDto): Promise<CatEntity> {
    const created = this.catRepository.create({
      name: cat.name,
      color: cat.color,
    });
    const saved = await this.catRepository.save(created);

    return saved;
  }

  async findAll(): Promise<CatEntity[]> {
    const cats = await this.catRepository.find();
    return cats;
  }
}
