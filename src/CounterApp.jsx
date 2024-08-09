import { useState } from "react"
export const  CounterApp=({value})=>{
    const [counter, setCounter] = useState(0);

    const addPoints=()=>{
        setCounter(counter+1);
    }
    const resPoints=()=>{
        if(counter===0){
            return;
        }
        setCounter(counter-1);
    }
    const resetValue=()=>{
        setCounter(value);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={addPoints}> +1 </button>
            <button onClick={resPoints}> -1 </button>
            <button onClick={resetValue}> Reset </button>
        </>
    )
}