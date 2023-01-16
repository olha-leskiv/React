import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-create";


function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useBooksContext();


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>;
    if(showEdit) {
        content = <BookEdit book={ book } onSubmit={handleSubmit} />
    }
    
    return (
    <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={book.title}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick} >Edit</button>
            <button className="delete" onClick={() => deleteBookById(book.id)}>Delete</button>
        </div>
    </div>
)}

export default BookShow;
