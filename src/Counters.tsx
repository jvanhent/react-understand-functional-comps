import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter";

function Counters() {
    console.log('Counters function')
    const [startValue , setStartValue] = useState(5)
    const [lastCounterKey , setLastCounterKey] = useState(3)

    function double() {
        setStartValue(startValue * 2)
        setLastCounterKey(lastCounterKey+1)
    }

    useEffect(() => {
        console.log('Counters.useEffect')
    }, [])

    return (
        <div className="App">
            <button onClick={double}>*2</button>
            <Counter start={startValue}/>
            <Counter/>
            <Counter key={lastCounterKey}/>

        </div>
    );
}

export default Counters;
