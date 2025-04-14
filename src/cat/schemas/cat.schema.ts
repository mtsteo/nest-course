import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop()
  name: string;
  @Prop()
  color: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
