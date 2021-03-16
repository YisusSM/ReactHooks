import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter'
import { useFetch } from '../../Hooks/useFetch'
import './layout.css'


export const LayoutEffect = () => {

    const [counter, increment] = useCounter(1);
    // console.log(counter)

    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log( data );
    // console.log( loading )

    const { author, quote } = !!data && data[0];

    const pTag = useRef();

    const [box, setBox] = useState({})

    useLayoutEffect(  () => {
        setBox( pTag.current.getBoundingClientRect() );
    },[quote])

    //console.log(author, quote)


    return (
        <div>

            <h1>Layout effect</h1>
            <hr />
            <blockquote className="blockquote text-right">
                <p className=" mb-0 " 
                ref = { pTag } >{quote}</p>
            
            </blockquote>

            <pre>
                { JSON.stringify( box, null, 3 ) }
            </pre>

            <button className="btn btn-primary"
                onClick={increment} > Siguiente quote </button>

        </div>
    )
}
