import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TimeDocument = HydratedDocument<Time>;

@Schema()
export class Time {
  @Prop({ unique: true, required: true })
  telegramId: string;
  @Prop()
  date: string;
}

export const TimeSchema = SchemaFactory.createForClass(Time);
