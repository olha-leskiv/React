import { useState} from "react";
import useBooksContext from "../hooks/use-books-create";

function BookEdit({ book, onSubmit}) {
    const [newTitle, setNewTitle] = useState(book.title);
    const {changeTitleById} = useBooksContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        changeTitleById(book.id, newTitle);
        onSubmit();
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

