import { useState } from "react";
import Animal from "./Animal";
import "./App.css";

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };
    const handleClearList = () => {
        setAnimals([])
    };
    function getRandomAnimal() {
        const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    
        return animals[Math.floor(Math.random() * animals.length)]
    }
    const renderedAnimals = animals.map((animal, index) => {
        return <Animal type={animal} key={index}/>
    });

    return (
    <div className="app">
        <div className="buttons">
            <button onClick={handleClick}>Add Animal</button>
            <button onClick={handleClearList}>Clear List</button>
        </div>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
)}

export default App;