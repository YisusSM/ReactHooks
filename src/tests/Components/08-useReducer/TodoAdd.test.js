import React from 'react';
import { shallow } from 'enzyme'
import { TodoAdd } from '../../../Components/08-useReducer/TodoAdd';

describe('pruebas en TodoAdd', () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd
        handleAddTodo={handleAddTodo} />);

    test('debe mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('no debe llamar handleAddTodo', () => {


        const p = wrapper.find('form').prop('onSubmit');
        p({ preventDefault() { } })
        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    })

    test('debe de llamar la funcion handleAddTodo', () => {
        
        const value = 'hola';
        const input = wrapper.find('input').simulate('change',{
            target:{
                value,
                name: 'desc'
            }
        });
        const p = wrapper.find('form').prop('onSubmit');
        p({ preventDefault() { } })
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        });

        expect(wrapper.find('input').prop('value')).toBe('')
    })
    


})
