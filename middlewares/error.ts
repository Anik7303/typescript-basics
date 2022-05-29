import { Request, Response, NextFunction } from "express";

export interface CustomError extends Error {
  statusCode?: number;
}

export function errorMiddleware(
  error: CustomError,
  _1: Request,
  res: Response,
  _2: NextFunction
) {
  const code = error.statusCode || 500;
  const message =
    error.message || "An unexpected error occured. Please try again later.";
  res.status(code).json({ message });
}
