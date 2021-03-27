import React from 'react';
import { shallow } from 'enzyme'
import { RealExampleRef } from '../../../Components/04-useRef/RealExampleRef';

describe('pruebas en RealExampleRef', () => {
    
    test('debe mostrarse correctamente ', () => {
        const wrapper = shallow(<RealExampleRef/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    })
    test('debe de mostrar el componente <MultipleCustomHook> ', () => {

        
        const wrapper = shallow(<RealExampleRef />)
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    })
    
})
