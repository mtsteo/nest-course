import { CAT_REPOSITORY, DOG_REPOSITORY } from '../tokens';
import { PgCatRepository } from './repository/cat.repository';
import { PgDogRepository } from './repository/dog.repository';

export const providers = [
  {
    provide: CAT_REPOSITORY,
    useClass: PgCatRepository,
  },
  {
    provide: DOG_REPOSITORY,
    useClass: PgDogRepository,
  },
];
