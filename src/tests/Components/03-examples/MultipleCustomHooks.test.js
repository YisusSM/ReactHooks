import React from 'react';
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from '../../../Components/03-examples/MultipleCustomHooks'
import { useFetch } from '../../../Hooks/useFetch';
import { useCounter } from '../../../Hooks/useCounter';
jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/useCounter');



describe('Pruebas en MultipleCustomHooks', () => {

    beforeEach( () => {
        useCounter.mockReturnValue([10,{}])
    })
  
    test('debe mostrarse correctamente ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'jesus',
                quote: 'Hola'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>);

        expect(wrapper.find('.aler').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola');
        expect(wrapper.find('footer').text().trim()).toBe('jesus');
        console.log(wrapper.html())
        
    })
    
    
})
