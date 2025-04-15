import { SqliteService } from '../_database/sqlite/sqlite.service';
import { DOG_REPOSITORY } from '../_database/tokens';

export const databaseProviders = {
  sqlite: {
    provide: DOG_REPOSITORY,
    useClass: SqliteService,
  },
};
