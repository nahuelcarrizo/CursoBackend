import { Router } from "express";

const router = Router();

router.delete("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
  console.log(`-------> User Logged out`);
});

export default router;
