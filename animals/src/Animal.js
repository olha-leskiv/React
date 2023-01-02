import { useState } from "react";
import "./Animal.css";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import horse from "./svg/horse.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";


const svgMap = {
    bird,
    cat,
    cow,
    dog,
    horse,
    gator,
    heart,
}

function Animal({ type }) {
    const [clicks, setHeartSize] = useState(0);
    const handleClick = () => {
        setHeartSize(clicks + 1)
    };

    return (
    <div onClick={handleClick} className='general'>
        <img alt='animal' src={svgMap[type]} className='animal-image' />
         <img  alt='heart' src={svgMap['heart']} className='heart-image' style={{height: 10 + 10 * clicks + 'px'}} />
    </div>
)}

export default Animal;