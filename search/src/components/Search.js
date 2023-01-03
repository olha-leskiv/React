import { useState } from "react";
import '../css/Search.css'

function Search({ onClick }) {
    const [term, setTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onClick(term);
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }; 

    return ( 
        <div className="search">
            <form onSubmit={handleSubmit}>
                <label>Type a word and press "Enter"</label>
                <input placeholder="Example: cat" value={term} onChange={handleChange} />
            </form>
        </div>
    )
}

export default Search;
