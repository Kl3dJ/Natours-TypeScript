import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  photo: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    required: true,
    validate: {
      validator: function (this: User, value: string) {
        return value === this.password;
      },
      message: 'Passwords do not match',
    },
  })
  passwordConfirm: string;

  @Prop({ enum: ['user', 'admin', 'guide', 'lead-guide'], default: 'user' })
  role: string;

  @Prop({ default: true, select: false })
  active: boolean;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
