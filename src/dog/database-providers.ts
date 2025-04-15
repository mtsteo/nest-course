import { MongoDogRepository } from '../database/mongoose/repository/dog.repository';
import { DOG_REPOSITORY } from '../database/tokens';

export const databaseProviders = {
  mongoProvider: {
    provide: DOG_REPOSITORY,
    useClass: MongoDogRepository,
  },
};
