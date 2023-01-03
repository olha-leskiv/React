import { useState } from "react";
import ImageList from './components/ImageList';
import Search from './components/Search';

function App() {
    const [images, setImages] = useState([]);

    function onClick(imgs) {
        setImages(imgs);
    }

    return (
        <div>
            <Search  onClick={onClick} />
            <ImageList images={images} />
        </div>
    )
};

export default App;