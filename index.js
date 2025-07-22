const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
// const ejs = require("ejs");
const port = process.env.PORT;

app.set("view engine", "ejs");

const allStudent = [
  {
    id: 1,
    name: 'Ajirogba',
    email: 'ajirogba@gmail.com',
    phone: +2348123456789,
    cuorse: 'B.Sc',
    State: 'Oyo'
  },
];

const score = 40
const date = new Date();

app.get("/ejs", (req, res) => {
  res.render(__dirname + "/index.ejs", {
    date,
    allStudent,
    score,
  });
});

app.get("/api", (req, res) => {
  res.send(allStudent);
});

app.get("/", (req, res) => {
  res.send("Welcome to my Node server");
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});

// module.exports = app;
