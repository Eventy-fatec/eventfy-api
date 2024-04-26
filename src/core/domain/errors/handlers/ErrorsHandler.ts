import AppError from '@core/domain/AppError';
import { Response, Request, NextFunction } from 'express';

const errorsHandler = (
  error: Error | AppError,
  _request: Request,
  response: Response,
  _: NextFunction,
): Response => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal Server Error - ${error.message}`,
  });
};

export { errorsHandler };
