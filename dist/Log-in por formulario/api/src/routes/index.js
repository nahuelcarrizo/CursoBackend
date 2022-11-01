import { Router } from "express";
import cookiesRoutes from "./cookies/cookies.routes.js";
import sessionRoutes from "./session/session.routes.js";

const router = Router();

router.use("/session", sessionRoutes);

export default router;
