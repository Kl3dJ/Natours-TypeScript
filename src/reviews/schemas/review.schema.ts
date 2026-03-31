import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Review {
  @Prop({ required: true })
  review: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ default: () => new Date() })
  createdAt: Date;

  @Prop({ required: true, ref: 'Tour' })
  tour: string;

  @Prop({ required: true, ref: 'User' })
  user: string;
}

export type ReviewDocument = Review & Document;
export const ReviewSchema = SchemaFactory.createForClass(Review);
