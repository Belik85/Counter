import React, {useState} from 'react';
import Button from './Button';
import Display from './Display';
import './App.css'


function App() {

    const [count, setCount] = useState(0)
    const max = 5;

    const increment = () => {
        if (count < max) {
            setCount(count + 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="page">
            <div className='counter'>
                <div className='wrapper'>
                    <Display count={count} max={max}/>
                </div>
                <div className='buttons'>
                    <div className='inc'>
                        <Button title={"INC"} disabled={count === max} onClick={increment}/>
                    </div>
                    <div className="reset">
                        <Button title={"RESET"} disabled={count === 0} onClick={reset}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;
