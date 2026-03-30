import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: 'default.jpg' })
  photo: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ enum: ['user', 'admin', 'guide', 'lead-guide'], default: 'user' })
  role: string;

  @Prop({ default: true, select: false })
  active: boolean;

  @Prop({ select: false })
  passwordResetToken?: string;

  @Prop({ select: false })
  passwordResetExpires?: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
