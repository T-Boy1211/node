const express = require("express");
const app = express();

const port = 7725;

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

app.get("/api", (req, res) => {
  res.send(allStudent);
});

app.get("/", (req, res) => {
  res.send("Welcome to my Node server");
});

// app.get('/api', (req, res)=>{
//   try {
//     res.status(201).json((message: allStudent))
//   } catch (error) {
//     res.send(503).json((message: error))
//   }
// })

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
