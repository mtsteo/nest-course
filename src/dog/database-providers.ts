import { DOG_REPOSITORY } from '../_database/tokens';
import { SqliteDogRepository } from './repository/dog-sqlite.repository';

export const databaseProviders = {
  sqlite: {
    provide: DOG_REPOSITORY,
    useClass: SqliteDogRepository,
  },
};
