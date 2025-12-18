console.log("cloned successfully");

console.log("hi there");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("hi there");
});

app.get("/insta", (req, res) => {
  res.send("my insta handle");
});

app.listen(process.env.PORT, () => {
  console.log(`listening app on ${port}`);
});

app.get("/youtube", (req, res) => {
  res.send("<h1>hahaha</h1>");
});
