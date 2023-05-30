import {useState} from 'react';

function Clicker() {
    
    const [count, setCount] = useState(0);
    
    const handleClick = () => {
        console.log('Clicked!');
        console.log(count);
        setCount(count + 1);
    };

    return (
        <>
        <button onClick={handleClick}>Click me!</button>
        <p>I've clicked the button {count} times.</p>
        </>
    )
}

export default Clicker;