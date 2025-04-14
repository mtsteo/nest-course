import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from '../../cat/entity/cat.entity';
import { CAT_REPOSITORY, DOG_REPOSITORY } from '../tokens';
import { providers } from './providers';
import { DogEntity } from '../../dog/entity/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity, DogEntity])],
  providers: providers,
  exports: [CAT_REPOSITORY, DOG_REPOSITORY],
})
export class PostgresModule {}
