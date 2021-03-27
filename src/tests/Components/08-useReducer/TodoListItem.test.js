import React from 'react';
import { shallow } from 'enzyme'
import { TodoListItem } from "../../../Components/08-useReducer/TodoListItem"
import { demoTodo } from '../../fixtures/demoTodos'

describe('pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem
        todo={demoTodo[0]}
        index={0}
        handleDelete={handleDelete}
        handleToggle={handleToggle} />)

    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('debe llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(1)

    })

    test('debe llamar la funcion handleToggle', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(1)

    })
    test('debe el texto correctamente ', () => {

        const p = wrapper.find('p');
        expect(p.text()).toBe(`1. ${demoTodo[0].desc}`);

    })


    test('debe tener la clase complete si el todo.done está en true', () => {

        const tood = demoTodo[0]
        tood.done = true;
        const wrapper = shallow(<TodoListItem
            todo={tood} />);
        

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    })



})
