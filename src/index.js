import express from "express";
import age from "../src/routes/age.js";
import firstname from "../src/routes/firstname.js";
import lastname from "../src/routes/lastname.js";
import mydata from "../src/routes/mydata.js";
import schoolemail from "../src/routes/schoolemail.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to you to me and to everybody.");
});

app.use(age);
app.use(firstname);
app.use(mydata);
app.use(schoolemail);
app.use(lastname);
// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
