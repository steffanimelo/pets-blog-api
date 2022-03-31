const express = require("express");
const app = express();

const port = process.env.PORT || 5050;

app.get("/", (req, res) => res.send("Welcome to Pets Blog API"));

const server = app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
