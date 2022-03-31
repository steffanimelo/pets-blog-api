const express = require("express");
const { resolve } = require("path");
const app = express();

const port = process.env.PORT || 5050;


app.get("/", (req, res) => res.send("Welcome to Pets Blog API"));
app.put("/", (req, res) => res.send("./home/post.js"));

const server = app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
