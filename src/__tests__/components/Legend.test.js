import React from 'react';
import Legend from '../../components/Legend';

let wrapper;

describe('Legend', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Legend children={<span>test</span>}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
