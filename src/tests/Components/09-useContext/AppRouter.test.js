import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../Components/09-useContext/AppRouter';
import { UserContext } from '../../../Components/09-useContext/UserContext';

describe('pruebas en AppRouter', () => {

    const wrapper = mount(
        <UserContext.Provider value = {{
            id:1,
            name:'jesus'
        }}>
            <AppRouter />
        </UserContext.Provider>

    )
    test('debe mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

})
