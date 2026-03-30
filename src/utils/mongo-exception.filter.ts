import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  ConflictException,
} from '@nestjs/common';
import { MongoServerError } from 'mongodb';

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    if (exception.code === 11000) {
      const field = Object.keys(exception.keyValue)[0];
      const value = exception.keyValue[field];
      // Duplicate key error
      response.status(409).json({
        status: 'error',
        message: `${field} with value '${value}' already exists.`,
      });
    } else {
      // For other MongoDB errors, you can handle them as needed
      response.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred.',
      });
    }
  }
}
