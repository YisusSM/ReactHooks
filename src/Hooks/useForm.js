import { useState } from "react"

export const useForm = ( initialState = {} ) => {
   
    const [values, setValues] = useState(initialState)




    const handleInputChange = ({ target }) => {
        setValues({
            ...values,   
            [ target.name ]: target.value,
            [ target.email ]: target.email,
            [ target.password ]: target.password	
        });
    }

    return [ values, handleInputChange ];

}
