
import React from 'react';
import {shallow,mount} from 'enzyme'
import { TodoApp } from '../../../Components/08-useReducer/TodoApp';
import { demoTodo } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('pruebas en TodoApp', () => {

    const wrapper =  shallow(<TodoApp/>)
    Storage.prototype.setItem = jest.fn(()=>{})
    test('debe de mostrarse correctamente', () => {

        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un todo', () => {

        const wrapper =  mount( <TodoApp/> )

        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1])
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp  (2)');
        expect(localStorage.setItem ).toHaveBeenCalledTimes(2);
       

    })

    test('debe eliminar un todo', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp  (0)')
        
    })
    
    
    
    
})
