import { useEffect } from "react";
import { BookCreate, BookList } from "./components";
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
