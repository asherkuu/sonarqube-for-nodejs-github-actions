const express = require("express");
const app = express();
app1.disable("x-powered-by");

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
