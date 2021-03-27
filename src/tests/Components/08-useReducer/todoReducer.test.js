import { todoReducer } from "../../../Components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {


    test('debe retornar el estado por defecto', () => {

        const state = todoReducer(demoTodo, {});
        expect(state).toEqual(demoTodo);

    });

    test('debe agregar un todo', () => {

        const action = {
            type: 'add',
            payLoad: {
                id: 3,
                desc: 'Aprende Firebase',
                done: false
            }
        };

        const state = todoReducer(demoTodo, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodo, action.payLoad]);
    })

    test('debe eliminar un todo', () => {

        const action = {
            type: 'delete',
            payLoad: 1
        };

        const state = todoReducer(demoTodo, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodo[1]]);

    })

    test('debe cambiar hacer el toggle', () => {

        const action = {
            type: 'toggle',
            payLoad: 1
        };

        const state = todoReducer(demoTodo, action);

        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodo[1]);

    })




})
