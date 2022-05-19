import "reflect-metadata";
import {
  NextFunction,
  Request,
  RequestHandler,
  Response,
  Router,
} from "express";
import { AppRouter } from "../../AppRouter";
import { METADATA, METHOD } from "../../keys";

function bodyValidator(keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(422).send("Invalid request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Invalid key: ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function): void {
    const router: Router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler: RequestHandler = target.prototype[key];

      const path = Reflect.getMetadata(METADATA.PATH, target.prototype, key);
      const method: METHOD = Reflect.getMetadata(
        METADATA.METHOD,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(METADATA.MIDDLEWARE, target.prototype, key) || [];
      const requireBodyProps =
        Reflect.getMetadata(METADATA.VALIDATOR, target.prototype, key) || [];

      const validator = bodyValidator(requireBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validator,
          routeHandler
        );
      }
    }
  };
}
