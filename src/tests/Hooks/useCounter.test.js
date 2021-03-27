import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter} from '../../../Hooks/useCounter';

describe('pruebas en useCounter', () => {
    test('devuelve valores por defecto  ', () => {
        const { result } = renderHook( () => useCounter() );
        const [ counter ] = result.current;
        const  [,increment]  = result.current;
        const  [,,decrement ] = result.current;
        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
    })

    test('debe tener el counter en 100  ', () => {
        const { result } = renderHook( () => useCounter(100) );
        const [ counter ] = result.current;
        expect(counter).toBe(100);
    })

    test('debe incrementar el counter en +1 ', () => {

        const { result } = renderHook( () => useCounter() );
        const [ ,increment ] = result.current;

        act( ()=>{
            increment();
        } )

        const [counter] = result.current;
        expect(counter).toBe(11);
        
    })

    test('debe decrementar el counter en -1 ', () => {

        const { result } = renderHook( () => useCounter() );
        const [ ,,decrement ] = result.current;

        act( ()=>{
            decrement();
        } )

        const [counter] = result.current;
        expect(counter).toBe(9);
        
    })

    test('debe resetear el counter ', () => {

        const { result } = renderHook( () => useCounter(100) );
        const [ ,,,reset ] = result.current;

        act( ()=>{
            reset();
        } )

        const [counter] = result.current;
        expect(counter).toBe(100);
        
    })
    
    
})
