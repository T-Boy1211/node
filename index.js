const express = require("express");
const app = express();
const ejs = require("ejs");
// app.use(express.json)
const port = 7745;

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
  {
    id: 2,
    name: 'Adeleke',
    email: 'adeleke@yahoo.com',
    phone: +2349160125899,
    cuorse: 'B.Tech',
    State: 'Osun'
  },
  {
    id: 3,
    name: 'Adeyemi',
    email: 'adeyemi@gmail.com',
    phone: +2348160175299,
    cuorse: 'Computer Engineering',
    State: 'Ogun'
  },
  {
    id: 4,
    name: 'Adeyanju',
    email: 'adeyanju@gmail.com',
    phone: +2349965125439,
    cuorse: 'Computer Science',
    State: 'Ondo'
  },
  {
    id: 5,
    name: 'Aderojo',
    email: 'aderojo@gmail.com',
    phone: +23491683258652,
    course: 'Mechatronics Engineering',
    State: 'Lagos'
  },
  {
    id: 6,
    name: 'Ojoade',
    email: 'ojoade@gmail.com',
    phone: +2349116268503,
    course: 'Mechanical Engineering',
    state: 'Imo'
  },
  {
    id: 7,
    name: 'Ajobade',
    emaail: 'ajobade@yahoo.com',
    phone: +2349122443379,
    cuorse: 'Architectural Enginerring',
    State: 'Kwara'
  },
  {
    id: 8,
    name: 'Imade',
    email: 'imade@yahoo.com',
    phone: +2349154355650,
    course: 'Medicine',
    State: 'Abia'
  },
  {
    id: 9,
    name: 'Adisarojo',
    email: 'adisarojo@yahoo.com',
    phone: +2349163489863,
    course: 'Biochemistry',
    State: 'Benue'
  },
  {
    id: 10,
    name: 'Oyediran',
    email: 'oyediran@yahoo.com',
    phone: +2349167452429,
    course: 'Chemiccal Engineering'
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
