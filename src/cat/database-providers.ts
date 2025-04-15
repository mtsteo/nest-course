import { MongoCatRepository } from '../_database/mongoose/repository/cat.repository';
import { CAT_REPOSITORY } from '../_database/tokens';

export const databaseProviders = {
  mongoProvider: {
    provide: CAT_REPOSITORY,
    useClass: MongoCatRepository,
  },
};
