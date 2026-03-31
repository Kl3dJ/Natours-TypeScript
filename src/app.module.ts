import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToursModule } from './tours/tours.module';
import { Connection } from 'mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt.guard';
import { ReviewsModule } from './reviews/reviews.module';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
    }),
    ConfigModule.forRoot({ isGlobal: true, envFilePath: 'config.env' }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db = configService.get<string>('DATABASE');
        const password = configService.get<string>('DATABASE_PASSWORD');

        if (!db || !password) {
          throw new Error('Database config is missing');
        }

        const uri = db.replace('<PASSWORD>', password);

        return {
          uri,
          onConnectionCreate: (connection: Connection) => {
            connection.on('connected', () =>
              console.log('--------Successfully connected-------'),
            );

            return connection;
          },
        };
      },
    }),
    ToursModule,
    UsersModule,
    AuthModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
