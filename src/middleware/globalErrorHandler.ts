import { Request, Response } from "express";
import { HttpError } from "http-errors";
import { v4 as uuidv4 } from "uuid";
import logger from "../config/logger";

const globalErrorHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  const statusCode = err.status || 500;
  const isProduction = process.env.NODE_ENV === "production";
  const message = isProduction ? "Internal server error" : err.message;
  logger.error({
    errorId: uuidv4(),
    type: err.name,
    msg: message,
    path: req.path,
    method: req.method,
    stack: err.stack,
  });
  res.status(statusCode).json({
    errors: [
      {
        errorId: uuidv4(),
        type: err.name,
        msg: message,
        path: req.path,
        method: req.method,
        stack: isProduction ? null : err.stack,
      },
    ],
  });
};

export default globalErrorHandler;
