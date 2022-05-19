import express from "express";
import cookieSession from "cookie-session";

import "./controllers/RootController";
import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";

const app = express();
const router = AppRouter.getInstance();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asldfjl"] }));

app.use(router);

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
