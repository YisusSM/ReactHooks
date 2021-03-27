import { useForm } from "../../Hooks/useForm";
import { renderHook, act } from '@testing-library/react-hooks';


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Jesus',
        email: 'jesussm_0001@hotmail.com',
        password: 123
    };

    test('debe regresar un formulario por defecto {} ', () => {

        const {result} = renderHook( () => useForm(initialForm) );
        const [ value,handleInputChange,reset ] = result.current;
        expect(value).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
        
        
    })

    test('debe cambiar el valor del formulario ', () => {

        const {result} = renderHook( () => useForm() );
        const [ ,handleInputChange ] = result.current;
        act( ()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'meli',
                }
            });
        } );
        const [value] = result.current;
        console.log(value)
        // expect(typeof handleInputChange).toBe('function');
        expect(value).toEqual({ name: 'meli'});
        
    })
    
    
})
