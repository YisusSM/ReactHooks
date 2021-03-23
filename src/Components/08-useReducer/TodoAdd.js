import React from 'react'
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ desc }, handleInputChange, reset] = useForm({
        desc: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (desc.trim().length <= 1) {
            return;
        }
        const newTodo = {

            id: new Date().getTime(),
            desc,
            done: false,
        }
        handleAddTodo( newTodo ); 
        reset();
    }

    return (
        <>
            <h4> Agregar TODO </h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="desc"
                    placeholder="Aprender"
                    autoComplete="off"
                    className="form-control"
                    value={desc}
                    onChange={handleInputChange} />

                <button
                    className="btn btn-outline-primary mt-1 w-100"
                    type="submit">Agregar</button>
            </form>
        </>
    )
}
