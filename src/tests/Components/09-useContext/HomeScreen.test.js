import React from 'react';
import { mount } from 'enzyme'
import { HomeScreen } from '../../../Components/09-useContext/HomeScreen';
import { UserContext } from '../../../Components/09-useContext/UserContext';
describe('pruebas en HomeScreen', () => {

    const wrapper = mount(
        <UserContext.Provider value = {{
            name: 'Jesus',
            email: 'notiene'
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    })

})
