import { useState } from "react";

function Search({ onClick }) {

    const handleKeyPress = (e) => {
        if(e.key !== 'Enter') return;
        getimagesFromAPi(e.currentTarget.value);
    }

    async function getimagesFromAPi(term) {
        try {
            let response = await fetch('https://api.unsplash.com/search/photos/?query=' + term + '&client_id=XE_VbLJTfRRFWy6oy4TX-awxcQlqH3XrJ23R3-tB3xY');
            let imgsCollection = await response.json();
            onClick(await imgsCollection.results);
        } catch(error) {
            throw error;
        }
    }

    return (
        <div>
            <label>Type and press enter</label>
            <input onKeyDown={handleKeyPress} />
        </div>
    )
}

export default Search;
