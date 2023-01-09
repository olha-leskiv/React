import { useState } from "react";

function BookCreate({ onCreate }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onCreate({
            id: Math.floor(Math.random() * 999999),
            title: value,
        });
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