import { NextFunction, Request, Response } from "express";

export const getTest = (_1: Request, res: Response): void => {
  res.status(200).json({ message: "Test successful" });
};

export const getErrorPage = (
  _1: Request,
  _2: Response,
  next: NextFunction
): void => {
  next(new Error("Error Message"));
};
