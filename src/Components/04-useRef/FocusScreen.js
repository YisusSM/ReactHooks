import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const ref = useRef()
    const handleClick = () => {
        ref.current.select();
    }

    return (
        <div>
            <h1>FocusSreen</h1>
            <hr/>
            <input
            className = "form-control"
            placeholder = "Su nombre"
            ref = { ref }
            />
            <button
            className = "btn btn-outline-primary mt-5"
            onClick = { handleClick }
            >Focus</button>
        </div>
    )
}
