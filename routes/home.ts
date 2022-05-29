import { Router } from "express";

import { getErrorPage, getTest } from "../controllers";

const router = Router();

router.get("/", getTest);

router.get("/error", getErrorPage);

export { router as homeRouter };
