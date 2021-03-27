import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../Components/09-useContext/UserContext';
import { LoginScreen } from '../../../Components/09-useContext/LoginScreen';

describe('pruebas en LoginScreen', () => {

    const setUser = jest.fn();
    const wrapper = mount(
        <UserContext.Provider value = {{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    );

    test('debe mostarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado ', () => {
        wrapper.find('button').simulate('click');
        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'jesus',
        })
    });
    

})
