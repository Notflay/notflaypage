import { Router } from "express";
import { renderHome } from "../controllers/page.routes";

const router = Router();

router.get("/", renderHome);

export default router;
