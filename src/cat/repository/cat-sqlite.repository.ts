import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from '../dto/create-cat.dto';
import { ICatsRepository } from '../interfaces/cat-repository.interface';
import { CatEntity } from '../entity/cat.entity';
import { Repository } from 'typeorm';

export class SqliteCatRepository implements ICatsRepository {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}
  create(createCatDto: CreateCatDto): Promise<CreateCatDto> {
    const cat = this.catRepository.create(createCatDto);
    return this.catRepository.save(cat);
  }

  findAll(): Promise<CreateCatDto[]> {
    return this.catRepository.find();
  }
}
