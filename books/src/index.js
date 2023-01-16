import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from './context/books';

let element = document.getElementById('root');
const root = ReactDOM.createRoot(element);


root.render(
<Provider> 
    <App />
</Provider>
) 