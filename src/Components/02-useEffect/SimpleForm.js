import React, {useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Messages } from './Messages'


export default function SimpleForm() {


    const notify = () => toast.dark('🦄 Chinga tu madre cris', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
 
    const [ formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
    }, [  ] );
    useEffect( () => {
    }, [ formState ] );
    useEffect( () => {
    }, [ email ] );

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,   
            [ target.name ]: target.value,
            [ target.email ]: target.email
        });
    }



    return (
        <>
            <h1>useEffect</h1>
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

           <div>
               
           <button onClick={notify} > Alert </button>   
           <ToastContainer />
            </div> 

            { (name === '123') && < Messages/> }

        </>
    )
}
