import { Router } from "express";
import checkAuth from "../../middlewares/auth/auth.middleware.js";
import { getHome } from "../../controllers/home/home.controller.js";

const router = Router();

router.get("/", checkAuth, getHome);

export default router;
