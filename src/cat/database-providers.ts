import { MongoCatRepository } from '../database/mongoose/repository/cat.repository';
import { PgCatRepository } from '../database/postgres/repository/cat.repository';
import { CAT_REPOSITORY } from '../database/tokens';

export const databaseProviders = {
  mongoProvider: {
    provide: CAT_REPOSITORY,
    useClass: MongoCatRepository,
  },
  pgProvider: {
    provide: CAT_REPOSITORY,
    useClass: PgCatRepository,
  },
};
