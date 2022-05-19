import express from "express";

export class AppRouter {
  private static instance: express.Router;

  private AppRouter() {}

  static getInstance(): express.Router {
    if (!AppRouter.instance) AppRouter.instance = express.Router();

    return this.instance;
  }
}
