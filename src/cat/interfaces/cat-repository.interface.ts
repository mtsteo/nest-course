import { CreateCatDto } from '../dto/create-cat.dto';

export interface ICatsRepository {
  create(cat: CreateCatDto): Promise<CreateCatDto>;
  findAll(): Promise<CreateCatDto[]>;
  // findById(id: string): Promise<Cat | null>;
  // update(id: string, data: Partial<Cat>): Promise<Cat | null>;
  // delete(id: string): Promise<Cat | null>;
}
