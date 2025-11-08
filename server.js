const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" Hello Ryzel! Your API server is running.");
});

app.get("/students", (req, res) => {
  const students = [
    { id: 1, name: "Ryzel Castillo", course: "BSIT" },
    { id: 2, name: "Alexa Santos", course: "BSCS" },
  ];
  res.json(students);
});

app.post("/add-student", (req, res) => {
  const student = req.body;
  res.json({ message: "Student added successfully!", student });
});

app.put("/update-student/:id", (req, res) => {
  const id = req.params.id;
  const updated = req.body;
  res.json({ message: `Student with ID ${id} updated!`, data: updated });
});

app.delete("/delete-student/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `Student with ID ${id} deleted!` });
});

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});
