import { Request, Response, NextFunction } from "express";

import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session["loggedIn"]) {
    next();
    return;
  }
  res.status(403).send("Access Denied");
}

@controller("")
class RootController {
  @get("/")
  getRoot(req: Request, res: Response): void {
    if (req.session && req.session["loggedIn"]) {
      res.send(`
        <div>
          <div>You are logged in.</div>
          </div>
          <a href="/auth/logout" title="Logout">Logout</a>
      `);
      return;
    }

    res.send(`
      <div>
        <div>You are not logged in.</div>
        <a href="/auth/login" title="Login">Login</a>
      </div>
    `);
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response): void {
    res.send("You are in a protected route, and is logged in");
  }
}
