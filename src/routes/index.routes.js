import { Router } from "express";
import { renderHome } from "../controllers/page.routes.js";

const router = Router();

router.get("/", renderHome);

export default router;
