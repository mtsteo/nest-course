import { Inject, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { ICatsRepository } from './interfaces/cat-repository.interface';
import { CAT_REPOSITORY } from '../database/tokens';

@Injectable()
export class CatService {
  constructor(
    @Inject(CAT_REPOSITORY) private readonly catsRepository: ICatsRepository,
  ) {}
  async create(createCatDto: CreateCatDto) {
    return this.catsRepository.create(createCatDto);
  }

  async findAll() {
    return this.catsRepository.findAll();
  }
}
