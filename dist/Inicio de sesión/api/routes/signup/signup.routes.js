import {
  getSignUp,
  getSignUpFail,
  postSignUp,
} from "../../controllers/signup/signup.controller.js";

import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", getSignUp);

router.post(
  "/",
  passport.authenticate("signup", {
    successRedirect: "/home",
  })
);

router.get("/fail", getSignUpFail);

export default router;
