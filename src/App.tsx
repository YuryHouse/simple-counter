import React, {useState} from 'react';
import './App.css';
import Counter, {minCount, maxCount} from "./Componets/Counter";


function App() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        if (count < maxCount) {
            setCount(count + 1)
        }
    }

    const resetCount = () => {
        setCount(0)
    }

    const decrementCount = () => {
        if (count > minCount) {
            setCount(count - 1)
        }

    }
    return (
        <>
            <h1 className={"name"}>Enemy Difference Counter</h1>
            <div className="App">
                <Counter
                    resetCount={resetCount}
                    count={count}
                    incrementCount={incrementCount}
                    decrementCount={decrementCount}/>
            </div>
        </>
    );
}

export default App;
