import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, value } = req.body;
    //validacion
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
});

router.delete("/:cookieName", async (req, res) => {
  try {
    const { cookieName } = req.params;
    req.clearCookie(cookieName);
    res.status(200).json({
      succes: true,
      message: `Cookie ${cookieName} borrada`,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
});

export default router;
