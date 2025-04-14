import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cat/entity/cat.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DogModule } from './dog/dog.module';
import { DogEntity } from './dog/entity/dog.entity';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateusteotonho:WrsF7NvCj7S1iXgw@cluster0.uorgs.mongodb.net/Nest?retryWrites=true&w=majority&appName=cluster0/cats',
    ),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      database: 'postgres',
      username: 'postgres',
      password: 'postgres',
      entities: [CatEntity, DogEntity],
      synchronize: true,
    }),
    CatModule,
    DogModule,
  ],
  providers: [],
})
export class AppModule {}
