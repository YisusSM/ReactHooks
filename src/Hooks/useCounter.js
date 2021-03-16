import { useState } from 'react'

export const useCounter = ( initialState = -1 ) => {

    const [counter, setCounter] = useState(initialState)

    const incrment = () => {
        setCounter( counter + 1 );
    }

    const decrement = () => {
        setCounter( counter - 1 );
    }

    const reset = () => {
        setCounter(initialState)
    }

    return [counter,incrment,decrement,reset];
      
}
