import "reflect-metadata";
import { METADATA } from "../../keys";

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(METADATA.VALIDATOR, keys, target, key);
  };
}
