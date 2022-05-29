import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();
import express from "express";
import cors from "cors";

//routes
import { homeRouter } from "./routes";

// middlewares
import { errorMiddleware } from "./middlewares";

// variables
const port = process.env.PORT || "3000";
const host = process.env.HOST || "192.168.0.100";

const app = express();

app.use(cors());
app.use(express.json());

app.use(homeRouter);
app.use(errorMiddleware);

app.listen(+port, host, (): void => {
  console.log(`server: http://${host}:${port}`);
});
