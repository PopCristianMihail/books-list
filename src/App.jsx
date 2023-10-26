import { useState, useEffect } from "react";
import { BookCreate, BookList } from "./components";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const CreateBook = async (title) => {
    console.log(title);
    const response = await axios.post(`http://localhost:3001/books`, {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...response.data,
        };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        editBookById={editBookById}
      />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
