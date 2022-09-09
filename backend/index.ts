import express from "express";
const app = express();
const port = 3001;

app.get("/test", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ foo: "bar" });
});

app.listen(port, () => {
  console.log(`yourappname backend listening at http://localhost:${port}`);
});
