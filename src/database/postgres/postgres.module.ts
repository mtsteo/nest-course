import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from '../../cat/entity/cat.entity';
import { CAT_REPOSITORY, DOG_REPOSITORY } from '../tokens';
import { providers } from './providers';
import { DogEntity } from '../../dog/entity/dog.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: config.get<number>('POSTGRES_PORT'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DB'),
        entities: [CatEntity, DogEntity],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([CatEntity, DogEntity]),
  ],
  providers: providers,
  exports: [CAT_REPOSITORY, DOG_REPOSITORY],
})
export class PostgresModule {}
