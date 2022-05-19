import "reflect-metadata";
import { RequestHandler } from "express";
import { METADATA } from "../../keys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const middlewares =
      Reflect.getMetadata(METADATA.MIDDLEWARE, target, key) || [];

    Reflect.defineMetadata(
      METADATA.MIDDLEWARE,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
