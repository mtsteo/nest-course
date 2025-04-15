import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CAT_REPOSITORY, DOG_REPOSITORY } from '../tokens';
import { CatSchema } from '../../cat/schemas/cat.schema';
import { providers } from './providers';
import { DogSchema } from '../../dog/schemas/dog.schema';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
      }),
    }),
    MongooseModule.forFeature([
      { name: 'Cats', schema: CatSchema },
      { name: 'Dogs', schema: DogSchema },
    ]),
  ],
  providers: providers,
  exports: [CAT_REPOSITORY, DOG_REPOSITORY],
})
export class MongoModule {}
