import { CAT_REPOSITORY, DOG_REPOSITORY } from '../tokens';
import { MongoCatRepository } from './repository/cat.repository';
import { MongoDogRepository } from './repository/dog.repository';

export const providers = [
  {
    provide: CAT_REPOSITORY,
    useClass: MongoCatRepository,
  },
  {
    provide: DOG_REPOSITORY,
    useClass: MongoDogRepository,
  },
];
