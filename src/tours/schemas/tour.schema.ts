import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ _id: false })
export class GeoLocation {
  @Prop({ type: String, default: 'Point', enum: ['Point'] })
  type: string;

  @Prop()
  coordinates: [number];

  @Prop()
  address: string;

  @Prop()
  description: string;
}

@Schema({ _id: false })
export class Location extends GeoLocation {
  @Prop()
  day: number;
}

@Schema()
export class Tour extends Document {
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

  @Prop({ default: Date.now, select: false })
  createdAt: Date;

  @Prop()
  startDates: [Date];

  @Prop()
  duration: number;

  @Prop()
  maxGroupSize: number;

  @Prop({ type: GeoLocation, _id: false })
  startLocation: GeoLocation;

  @Prop({ type: [Location], _id: false })
  locations: Location[];

  @Prop({ type: [Types.ObjectId], ref: 'User' })
  guides: Types.ObjectId[];

  @Prop()
  secretTour: boolean;
}

export type TourDocument = Tour & Document;
export const TourSchema = SchemaFactory.createForClass(Tour);
