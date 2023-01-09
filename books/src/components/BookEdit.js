import { useState } from "react";

function BookEdit({ book, onSubmit}) {
    const [newTitle, setNewTitle] = useState(book.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, newTitle);
    }

    return (
    <div>
        <form className="form-edit" onSubmit={handleSubmit} >
            <label>Edit title</label>
            <input className="input" value={newTitle} placeholder="Enter new title" onChange={(e) => setNewTitle(e.target.value)} />
            <button className="button is-primary" >Save</button>
        </form>
    </div>
)};

export default BookEdit;

