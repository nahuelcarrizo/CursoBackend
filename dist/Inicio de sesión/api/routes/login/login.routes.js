import { Router, response } from "express";
import {
  getLogin,
  getLoginFail,
  postLogin,
} from "../../controllers/login/login.controller.js";

import passport from "passport";

const router = Router();

router.post(
  "/",
  passport.authenticate("login", {
    successRedirect: "/home",
    failureRedirect: "/signup",
  }),
  postLogin
);

router.get("/fail", getLoginFail);

export default router;
