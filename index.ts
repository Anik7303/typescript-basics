import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

interface ErrorWithCode extends Error {
  statusCode?: number;
}

// variables
const port = process.env.PORT || "3000";
const host = process.env.HOST || "192.168.0.100";

const app = express();

app.use(cors());
app.use(express.json());

// universal route
app.use((req: Request, res: Response): void => {
  res.status(200).json({ message: "test successful" });
});

// error middleware
app.use(
  (
    error: ErrorWithCode,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const message =
      error.message || "An unexpected error occured. Please try again later.";
    const code = error.statusCode || 500;
    res.status(code).json({ message });
  }
);

app.listen(+port, host, (): void => {
  console.log(`server: http://${host}:${port}`);
});
