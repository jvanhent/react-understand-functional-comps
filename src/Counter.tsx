import React, {useEffect, useState} from 'react';

type CounterProps = {
    start?: number
    key?: number
}

function Counter({start} : CounterProps) {
    console.log('Counter function')
    const [counter, setCounter] = useState(start || 0)

    useEffect(() => {
        console.log('Counter.useEffect')
    }, [])

    // Alternativelly, Use key to reset state, which is actually
    // mounting a new component instance
    useEffect(() => {
        console.log('Counter.new start prop')
        if(start)
            setCounter(start)
    }, [start])

    function up() {
        setCounter(counter + 1)
    }

    function down() {
        setCounter(counter - 1)
    }

    return (
        <div >
            <button onClick={down}>-</button>
            <p>{counter}</p>
            <button onClick={up}>+</button>
        </div>
    );
}

export default Counter;
