import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hello Earth!");
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
