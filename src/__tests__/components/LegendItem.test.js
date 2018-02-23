import React from 'react';
import LegendItem from '../../components/LegendItem';

let wrapper;
const props = {
    color: 'red',
    label: 'Cumulative'
};

describe('LegendItem', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<LegendItem {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
