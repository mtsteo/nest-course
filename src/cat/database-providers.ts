import { MongoCatRepository } from './repository/cat-mongo.repository';
import { CAT_REPOSITORY } from '../_database/tokens';
import { SqliteCatRepository } from './repository/cat-sqlite.repository';

export const databaseProviders = {
  mongoProvider: {
    provide: CAT_REPOSITORY,
    useClass: MongoCatRepository,
  },
  sqliteProvider: {
    provide: CAT_REPOSITORY,
    useClass: SqliteCatRepository,
  },
};
