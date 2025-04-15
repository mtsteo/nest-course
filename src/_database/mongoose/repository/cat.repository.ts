import { Injectable } from '@nestjs/common';
import { ICatsRepository } from '../../../cat/interfaces/cat-repository.interface';
import { Cat } from '../../../cat/schemas/cat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../../../cat/dto/create-cat.dto';
import { mockData } from '../../../cat/mockData';

@Injectable()
export class MongoCatRepository implements ICatsRepository {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll() {
    return this.catModel.find().exec();
  }
}
