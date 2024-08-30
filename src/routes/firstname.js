import { Router } from "express";

const router = Router();

router.get("/firstname", (req, res) => {
  const first_name = "Rexer John";
  res.status(200).send({ first_name });
});

export default router;
