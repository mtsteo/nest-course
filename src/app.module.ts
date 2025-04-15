import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DogModule } from './dog/dog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './dog/entity/dog.entity';
import { SqliteModule } from './_database/sqlite/sqlite.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.ENVIRONMENT || 'dev'}`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [DogEntity],
    }),
    CatModule,
    DogModule,
    SqliteModule,
  ],
})
export class AppModule {}
