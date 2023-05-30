import './App.css';
import {useState} from 'react';
import Clicker from '../Clicker/Clicker';

function App() {

// useState hook makes state variables (moved to Clicker.jsx)!
    // const [count, setCount] = useState(0);
    
    // const handleClick = () => {
    //     console.log('Clicked!');
    //     console.log(count);
    //     setCount(count + 1);
    // };
    
    // console.log(count);

// RENDER COMPONENT:
    return (
        <div className="App">
            <p>Hello! My name is Luke.</p>
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
}

export default App;
