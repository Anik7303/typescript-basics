import "reflect-metadata";
import { RequestHandler } from "express";
import { METHOD, METADATA } from "../../keys";

interface RequestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (routeName: string) {
    return function (
      target: any,
      key: string,
      desc: RequestHandlerDescriptor
    ): void {
      Reflect.defineMetadata(METADATA.PATH, routeName, target, key);
      Reflect.defineMetadata(METADATA.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(METHOD.GET);
export const post = routeBinder(METHOD.POST);
export const put = routeBinder(METHOD.PUT);
export const patch = routeBinder(METHOD.PATCH);
export const del = routeBinder(METHOD.DEL);
