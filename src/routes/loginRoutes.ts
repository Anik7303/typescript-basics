import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session["loggedIn"]) {
    next();
    return;
  }
  res.status(403).send("Access Denied");
}

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  if (req.session && req.session["loggedIn"]) {
    res.send(`
      <div>
        <div>You are logged in.</div>
        <a href="/logout" title="Logout">Logout</a>
      </div>
    `);
    return;
  }

  res.send(`
    <div>
      <div>You are not logged in.</div>
      <a href="/login" title="Login">Login</a>
    </div>
  `);
});

router.get("/login", (req: Request, res: Response): void => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">Email</label>
        <input name="email" id="email" type="text" />
      </div>
      <div>
        <label for="password">Password</label>
        <input name="password" id="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

router.post("/login", (req: RequestWithBody, res: Response): void => {
  const { email, password } = req.body;

  if (email && password && email === "email" && password === "password") {
    req.session = { ...req.session, loggedIn: true };
    res.redirect("/");
  } else {
    res.status(422).send("Incorrect email or password");
  }
});

router.get("/logout", (req: Request, res: Response): void => {
  req.session = { ...req.session, loggedIn: false };
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response): void => {
  res.send("You are in a protected route, and is logged in");
});

export { router };
