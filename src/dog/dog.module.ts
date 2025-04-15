import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { SqliteModule } from '../_database/sqlite/sqlite.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './entity/dog.entity';
import { SqliteService } from '../_database/sqlite/sqlite.service';

@Module({
  imports: [TypeOrmModule.forFeature([DogEntity]), SqliteModule],
  controllers: [DogController],
  providers: [DogService, SqliteService],
})
export class DogModule {}
