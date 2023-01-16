import { useState } from "react";
import useBooksContext from "../hooks/use-books-create";


function BookCreate() {
    const [value, setValue] = useState('');
    const { createBook } = useBooksContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        createBook(value);
        setValue('');
    }
  
    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={value} placeholder="Book name" onChange={(e) => setValue(e.target.value)} />
            <button className="button">Create!</button>
        </form>
    </div>
)}

export default BookCreate;