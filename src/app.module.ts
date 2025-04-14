import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cat/entity/cat.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DogModule } from './dog/dog.module';
import { DogEntity } from './dog/entity/dog.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CatModule, DogModule],
  providers: [],
})
export class AppModule {}
