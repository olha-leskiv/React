import { useState } from "react";

function BookEdit({ book, onEdit, setShowEdit, title }) {
    const [newTitle, setNewTitle] = useState(title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(book.id, newTitle);
        setShowEdit(false);
    }

    return (
    <div>
        <form onSubmit={handleSubmit} >
            <label>Edit title</label>
            <input value={newTitle} placeholder="Enter new title" onChange={(e) => setNewTitle(e.target.value)} />
        </form>
    </div>
)};

export default BookEdit;

