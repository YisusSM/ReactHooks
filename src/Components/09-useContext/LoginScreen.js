import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext)
    const user = {
        id: 123,
        name: 'jesus',
    }
    return (
        <div>
             <h1>LoginScreen</h1>
            <hr/>
            <button
            className = "btn btn-primary"
            onClick = {()=> setUser(user)}>add</button>
        </div>
    )
}
