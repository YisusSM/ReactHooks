import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../Hooks/useForm';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import './styles.css'




const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleDelete = (e) => {

        const action = {
            type: 'delete',
            payLoad: e
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payLoad: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
    
        dispatch({
            type: 'add',
            payLoad: newTodo,
        });
    }


    return (
        <div>
            <h1>TodoApp  ({todos.length})</h1>
            <hr />

            <div
                className="row">
                <div
                    className="col-7">
                   <TodoList 
                   todos = {todos}
                   handleDelete = {handleDelete}
                   handleToggle = {handleToggle}/>
                </div>

                <div
                    className="col-5">
                    <TodoAdd
                    handleAddTodo = {handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
