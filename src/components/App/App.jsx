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

    const [name, setName] = useState('Luke');
    const [nameInput, setNameInput] = useState('');

    const handleNewName = () => {
        setName(nameInput);
    };

// RENDER COMPONENT:
    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <input placeholder='enter name' onChange={(event) => setNameInput(event.target.value)}/>
            <button onClick = {handleNewName}>Submit</button>
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
}

export default App;
