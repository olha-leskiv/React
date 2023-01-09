import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit title={book.title} book={ book } onEdit={onEdit} setShowEdit={setShowEdit}/>
    }
    
    return (
    <div className="book-show">
        {/* <img /> */}
        <div>{content}</div>
        <div className="actions">
            <button className="delete" onClick={() => onDelete(book.id)}>Delete</button>
            <button className="edit" onClick={handleEditClick} >Edit</button>
        </div>
    </div>
)}

export default BookShow;