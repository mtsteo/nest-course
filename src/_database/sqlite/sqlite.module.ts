import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from '../../dog/entity/dog.entity';
import { CatEntity } from '../../cat/entity/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [DogEntity, CatEntity],
    }),
  ],
  exports: [TypeOrmModule],
})
export class SqliteModule {}
