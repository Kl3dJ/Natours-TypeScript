import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToursModule } from './tours/tours.module';
import { Connection } from 'mongoose';

@Module({
  imports: [
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
