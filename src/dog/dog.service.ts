import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';
import { SqliteService } from '../_database/sqlite/sqlite.service';

@Injectable()
export class DogService {
  constructor(private readonly sqlitedb: SqliteService) {}
  create(createDogDto: CreateDogDto) {
    return this.sqlitedb.create(createDogDto);
  }
  findAll() {
    return this.sqlitedb.findAll();
  }
}
