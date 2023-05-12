import React, {useEffect} from 'react';
import './App.css';
import Counters from "./Counters";

function App() {
    console.log('App function')

    useEffect(() => {
        console.log('App.useEffect')
    }, [])

    return (
        <div className="App">
            <Counters/>

        </div>
    );
}

export default App;
