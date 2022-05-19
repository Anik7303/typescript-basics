import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
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
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === "email" && password === "password") {
      req.session = { ...req.session, loggedIn: true };
      res.redirect("/");
    } else {
      res.status(422).send("Incorrect email or password");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = { ...req.session, loggedIn: false };
    res.redirect("/");
  }
}
