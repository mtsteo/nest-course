import { CreateDogDto } from '../../../dog/dto/create-dog.dto';
import { IDogsRepository } from '../../../dog/interfaces/dog-repository.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Dog } from '../../../dog/schemas/dog.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDogRepository implements IDogsRepository {
  constructor(@InjectModel('Dog') private readonly dogModel: Model<Dog>) {}

  async create(CreateDogDto: CreateDogDto) {
    const createdCat = new this.dogModel(CreateDogDto);
    return createdCat.save();
  }

  async findAll(): Promise<CreateDogDto[]> {
    return this.dogModel.find().exec();
  }
}
