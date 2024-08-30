import { Router } from "express";

const router = Router();

router.get("/schoolemail", (req, res) => {
  const email = "rexer.anoos@gmail.com";
  res.status(200).send({ email });
});

export default router;
