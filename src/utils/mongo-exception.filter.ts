import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { MongoServerError } from 'mongodb';

type ErrorHandler = (exception: any, response: any) => void;

const errorHandlers: Record<string, ErrorHandler> = {
  '11000': (exception, response) => {
    const field = Object.keys(exception.keyValue)[0];
    const value = exception.keyValue[field];
    response.status(409).json({
      status: 'error',
      message: `${field} with value '${value}' already exists.`,
    });
  },
  CastoError: (exception, response) => {
    response.status(400).json({
      status: 'error',
      message: `Invalid ${exception.path}: ${exception.value}.`,
    });
  },
  ValidationError: (exception, response) => {
    const error = Object.values(exception.errors).map(
      (err: any) => err.message,
    );
    response.status(400).json({
      status: 'error',
      message: 'Validation failed.',
      error,
    });
  },
  JsonWebTokenError: (exception, response) => {
    response.status(401).json({
      status: 'error',
      message: 'Invalid token.',
    });
  },
  TokenExpiredError: (exception, response) => {
    response.status(401).json({
      status: 'error',
      message: 'Token has expired.',
    });
  },
};

@Catch(MongoServerError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const handler =
      errorHandlers[String(exception.code)] || errorHandlers[exception.name];
    if (handler) {
      handler(exception, response);
    } else {
      // For other MongoDB errors, you can handle them as needed
      response.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred.',
      });
    }
  }
}
