import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../Components/08-useReducer/TodoList'
import { demoTodo } from '../../fixtures/demoTodos';


describe('pruebas en TodoList', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodo}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />)

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })
    test('debe 2 elementos todosItems', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));


    })


})
