import { Router, response } from "express";

import authMiddleware from "../../middlewares/auth/auth.middleware.js";
import { counterMiddleware } from "../../middlewares/count/counter.middleware.js";

const router = Router();

router.get("/home", authMiddleware, async (req, res = response) => {
  console.log("home called");
  try {
    return await res.status(200).json(req.session.username);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = await req.body;
    if (username && password) {
      req.session.username = username;
      req.session.password = password;
    }
    res.redirect("/session/home");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
router.delete("/logout", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (!err) res.redirect("/session/logout");
      else
        res.json({
          success: false,
          message: err.message,
        });
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

router.get("/logout", async (req, res = response) => {
  try {
    return await res.status(200).json(req.session.username);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
export default router;
