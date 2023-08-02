import cors from "cors";
import express from "express";
import mysql from "mysql";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8800;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "62331430",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conexão bem-sucedida ao banco de dados!");
});

app.get("/", (req, res) => {
  res.json("Hello this is database");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err); // return error to frontend
      res.json(err);
    } else {
      res.json(data); // return result to frontend
    }
  });
});

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price`,`cover`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      res.json(err); // return error to frontend
    } else {
      return res.json(data); // return result to frontend
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
