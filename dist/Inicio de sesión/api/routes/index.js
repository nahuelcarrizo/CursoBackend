import { Router } from "express";
import homeRoutes from "./home/home.routes.js";
import logOutRoutes from "./logout/logout.routes.js";
import loginRoutes from "./login/login.routes.js";
import signUpRoutes from "./signup/signup.routes.js";

const router = Router();

router.use("/home", homeRoutes);
router.use("/login", loginRoutes);
router.use("/signup", signUpRoutes);
router.use("/logout", logOutRoutes);

export default router;
