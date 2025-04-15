import { MongoDogRepository } from '../_database/mongoose/repository/dog.repository';
import { DOG_REPOSITORY } from '../_database/tokens';

export const databaseProviders = {
  mongoProvider: {
    provide: DOG_REPOSITORY,
    useClass: MongoDogRepository,
  },
};
