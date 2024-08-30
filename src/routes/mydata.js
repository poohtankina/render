import { Router } from "express";

const router = Router();

router.get("/mydata", (req, res) => {
  const name = "Rexer John Anoos";
  const gender = "male";
  const email = "rexer.anoos@gmail.com";
  const age = "21";
  res.status(200).send({ name, age, gender, email });
});

export default router;
