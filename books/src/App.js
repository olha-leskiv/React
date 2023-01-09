import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import { useState } from "react";

function App() {
    const [books, setBooks] = useState([]);
    
    const createBook = (book) => {
        setBooks([...books, book]);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedBooks);
    }

    const changeTitleById = (id, title) => {
        const updatedBooks = books.map((book) => {
            if(book.id === id) {
                return {...book, title: title};
            }
            return book;
        })

        setBooks(updatedBooks);
    }

    return (
    <div className="app">
        <BookList books={books} onDelete={deleteBookById} onEdit={changeTitleById} />
        <BookCreate onCreate={createBook} />
    </div>
)}

export default App;