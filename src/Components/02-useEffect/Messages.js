import React, { useEffect, useState } from 'react'

export const Messages = () => {

    const [coords, setcoors] = useState({ x:0, y:0 })
    const { x, y } = coords;

    useEffect(() => {
        const mouseMove = (e) => {
             const coords = { x: e.x, y: e.y };
           setcoors( coords );
        }
        window.addEventListener('mousemove',mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h3>Eres Genial</h3>
            <p>
                x: { x }
                y: { y }
            </p>
        </div>
    )
}
