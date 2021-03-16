import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const [state, incrment, decrement, reset] = useCounter();
    console.log(state)


    return (
        <>
            <h1>Counter with Hook { state }</h1>
            <hr />

            <button onClick = {() => incrment(2) } className= "btn btn-primary"> +1 </button>
            <button onClick = { reset } className= "btn btn-primary"> reset </button>
            <button  onClick = {() => decrement(4) } className = "btn btn-primary"> -1 </button>
        </>
    )
}
