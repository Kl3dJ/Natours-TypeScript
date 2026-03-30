import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.guard';
import { User, UserSchema } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const secret = configService.get<string>('JWT_SECRET');
        const expiresIn = configService.get<string>('JWT_EXPIRES_IN') || '7d';
        return {
          secret: secret || 'your-secret-key',
          signOptions: {
            expiresIn: expiresIn as any,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtAuthGuard, UsersService],
  exports: [AuthService, JwtAuthGuard, JwtStrategy, PassportModule],
})
export class AuthModule {}
