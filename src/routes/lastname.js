import { Router } from "express";

const router = Router();

router.get("/lastname", (req, res) => {
  const last_name = "Anoos";
  res.status(200).send({ last_name });
});

export default router;
