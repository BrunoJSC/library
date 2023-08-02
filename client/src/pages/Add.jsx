import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleClick(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(book);

  return (
    <div className="form">
      <h1>Add new book</h1>

      <input
        type="text"
        placeholder="title"
        value={book.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        value={book.desc}
        onChange={handleChange}
        name="desc"
      />
      <input
        type="number"
        placeholder="price"
        value={book.price}
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        value={book.cover}
        onChange={handleChange}
        name="cover"
      />

      <button onClick={handleClick}>Add</button>
    </div>
  );
};
