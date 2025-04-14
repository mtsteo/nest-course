import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
  @Prop()
  name: string;
  @Prop()
  color: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
