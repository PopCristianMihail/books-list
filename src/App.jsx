import { useState } from 'react';
import { BookCreate, BookList } from './components';

function App () {

    const [books,setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const CreateBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id : Math.round(Math.random() * 9999),
                title // OR title:title
            }
        ]
        setBooks(updatedBooks);
    }

    const editBookById = (id,title) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    title
                }
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    return(
    <div className='app'>
        <h1>Book List</h1>
        <BookList books={books} onDelete={deleteBookById} editBookById = {editBookById}/>
        <BookCreate onCreate={CreateBook}/>
    </div>
    );
}

export default App;