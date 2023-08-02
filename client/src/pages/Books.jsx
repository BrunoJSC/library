import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8800/books");
        console.log(response);

        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            {book && <img src={book.cover} alt={book.title} />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add book</Link>
      </button>
    </div>
  );
};
