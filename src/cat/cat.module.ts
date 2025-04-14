import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './entity/cat.entity';
import { databaseProviders } from './database-providers';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
    TypeOrmModule.forFeature([CatEntity]),
  ],
  controllers: [CatController],
  providers: [CatService, { ...databaseProviders.mongoProvider }],
})
export class CatModule {}
