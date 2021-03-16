import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useForm } from '../../../Hooks/useForm';
import '../../01-Use-state/02-useEffect/effects.css'



export const FormWithCustomHook = () => {


    const notify = () => toast.dark( 'formValues', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
 
    const [ formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });
    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email change')

    }, [email])

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log( formValues );

    }



    return (
        <form onSubmit = { handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className = "form-group">
                <input
                type = "text"
                name = "name"
                className = "form-control"
                placeholder = "Tu Nombre"
                autoComplete = "off"
                value = { name }
                onChange = { handleInputChange }
                />

            </div>
            <hr/>
            <div className = "form-group">
                <input
                type = "text"
                name = "email"
                className = "form-control"
                placeholder = "email@hotmail.com"
                autoComplete = "off"
                value = { email }
                onChange = { handleInputChange }
                />

            </div>
            <hr/>

            <div className = "form-group">
                <input
                type = "password"
                name = "password"
                className = "form-control"
                placeholder = "*******"
                value = { password }
                onChange = { handleInputChange }
                />

            </div>
            <hr/>

           <div>
               
           <button onClick={ notify } 
           type = "submit"
           className = "btn btn-primary"> guardar </button>   
           <ToastContainer />
            </div> 

        </form>
    )
}
