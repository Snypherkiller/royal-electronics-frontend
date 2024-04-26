import React, {useState} from "react";

function CounterFunction() {

    let [number,setNumber] = useState(0)

    function incriment(){
        setNumber(++number)
    }

    return(
        <div>
            <h1>Counter = {number}</h1>
            <button onClick={e =>incriment()}>Incriment</button>
        </div>
    )
}

export default CounterFunction;