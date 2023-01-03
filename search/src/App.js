import { useState } from "react";
import ImageList from './components/ImageList';
import Search from './components/Search';
import getImagesFromApi from "./api";
import './css/App.css'


function App() {
    const [images, setImages] = useState([]);
     
    const onClick = async (term) => {
        let result = await getImagesFromApi(term);
        setImages(result);
    }

    return (
        <div className="app">
            <Search  onClick={onClick} />
            <ImageList images={images} />
        </div>
    )
};

export default App;