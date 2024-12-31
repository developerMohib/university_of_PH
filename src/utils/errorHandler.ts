import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode : number = 500;
  const message = err.message || 'Something went wrong';
  res.status(statusCode).json({
    success : false,
    message,
    error : err
  })
};

export { globalErrorHandler };
