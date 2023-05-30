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
// changing Luke to whatever we type in:
        setName(nameInput);
// clearing input after submit
        setNameInput(''); 
    };

// RENDER COMPONENT:
    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <input value={nameInput} placeholder='enter name' onChange={(event) => setNameInput(event.target.value)}/>
            <button onClick = {handleNewName}>Submit</button>
            <Clicker />
            <Clicker />
            <Clicker />
        </div>
    );
}

export default App;
