import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import Button from './Button';
import Display from './Display';
import Input from "./Input";
import './App.css'


function App() {

    const [count, setCount] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(1);
    const [maxValue, setMaxValue] = useState<number>(2);
    const [error, setError] = useState<string>("");
    // const [error, setError] = useState<boolean>(false);


    const setValue = () => {
        setCount(minValue)
    }

    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value
        if (inputValue > maxValue || inputValue < 0) {
            setError("Error")
            setMinValue(inputValue)
            return
        }
        setMinValue(inputValue)
        setError('')
        // if (+e.currentTarget.value < 0){
        //     setError("error")
        //     setMinValue(+e.currentTarget.value)
        //     return
        // }
        // if (+e.currentTarget.value > maxValue){
        //     setError('Incorrect value')
        //     setMinValue(+e.currentTarget.value)
        // }
        // if (+e.currentTarget.value < maxValue && +e.currentTarget.value < 0){
        //     setError('')
        //     setMinValue(+e.currentTarget.value)
        // }
        //
        // if (+e.currentTarget.value > 0) {
        //     setMinValue(+e.currentTarget.value);
        // }


        // if (+e.currentTarget.value > maxValue){
        //     setError(true)
        // }
        //
        // if (+e.currentTarget.value > maxValue){
        //     setError(true)
        // }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = +e.currentTarget.value
        console.log(inputValue)
        if (inputValue < minValue || inputValue < 0) {
            setError("Error")
            setMaxValue(inputValue)
            return
        }
        setMaxValue(inputValue)
        setError('')
        // if (inputValue > minValue) {
        //     setMaxValue(inputValue)
        // }
    }

    const increment = () => {
        if (count < maxValue) {
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
                    <Display count={count} max={maxValue} error={error}/>
                </div>
                <div className='buttons'>
                    <div className='inc'>
                        <Button title={"INC"} disabled={count === maxValue} onClick={increment}/>
                    </div>
                    <div className="reset">
                        <Button title={"RESET"} disabled={count === 0} onClick={reset}/>
                    </div>
                </div>
            </div>


            <div className='counters'>
                <div className='wrappers'>
                    <div className='min'>
                        Min value
                        <Input title={"min value"} value={minValue} onChange={onChangeMinValue}/>
                    </div>
                    <div className='max'>
                        Max value
                        <Input title={"max value"} value={maxValue}  onChange={onChangeMaxValue}/>
                    </div>
                </div>
                <div className='setvalue'>
                    <Button title={"SET VALUE"} disabled={false} onClick={setValue}/>
                </div>

            </div>
        </div>
    );

}

export default App;

