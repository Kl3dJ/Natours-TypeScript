import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tour {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  slug: string;

  @Prop({ required: true, enum: ['easy', 'medium', 'difficult'] })
  difficulty: string;

  @Prop({ default: 4.5 })
  ratingsAverage: number;

  @Prop({ default: 0 })
  ratingsQuantity: number;

  @Prop({ required: true })
  price: number;

  @Prop()
  priceDiscount: number;

  @Prop({ required: true, trim: true })
  summary: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ required: true })
  imageCover: string;

  @Prop()
  images: [string];

  @Prop({ default: Date.now(), select: false })
  createdAt: Date;
}

export type TourDocument = Tour & Document;
export const TourSchema = SchemaFactory.createForClass(Tour);
