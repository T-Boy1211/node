const express = require("express");
const app = express();
const ejs = require("ejs");
// app.use(express.json)
const port = 7745;

app.set("view engine", "ejs");

const allStudent = [
  {
    id: 1,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 2,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 3,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 4,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 5,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 6,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 7,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 8,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 9,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
  {
    id: 10,
    name: "ajirogba",
    emaail: "ajirogba@gmail.com",
  },
];

const score = 40

app.get("/ejs", (req, res) => {
  res.render("index.ejs", {
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
