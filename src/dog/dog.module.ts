import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './schemas/dog.schema';
import { databaseProviders } from './database-providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './entity/dog.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dog', schema: DogSchema }]),
    TypeOrmModule.forFeature([DogEntity]),
  ],
  controllers: [DogController],
  providers: [
    DogService,
    {
      ...databaseProviders.mongoProvider,
    },
  ],
})
export class DogModule {}
