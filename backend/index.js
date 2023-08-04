// Create some code to make the right image format from req.body.cover

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import multer from "multer";
import mysql from "mysql";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("uploads"));

const PORT = 8800;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "62331430",
  database: "test",
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

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

app.get("/uploads", (req, res) => {
  res.render("uploads");
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

  console.log(req.body.cover);
  console.log(req.body);

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
      res.json(err); // return error to frontend
    } else {
      return res.json(data); // return result to frontend
    }
  });
});

app.post("/uploads", upload.single("image"), (req, res) => {
  console.log(req.file);

  res.json({ message: "Upload feito com sucesso!" });
});

app.put("/books/:id", (req, res) => {
  const q =
    "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  const id = req.params.id;

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values, id], (err, data) => {
    if (err) {
      console.log(err);
      res.json(err); // return error to frontend
    } else {
      return res.json(data); // return result to frontend
    }
  });
});

app.delete("/books/:id", (req, res) => {
  const q = "DELETE FROM books WHERE id = ?";
  const id = req.params.id;
  db.query(q, [id], (err, data) => {
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
