import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, editBookById }) {
  const [showEddit, setShowEddit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEddit(!showEddit);
    editBookById(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEddit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img
        src={`https://picsum.photos/seed/${book.title}/300/200`}
        alt={book.title}
      />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleSubmit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
