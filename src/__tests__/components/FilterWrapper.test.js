import React from 'react';
import FilterWrapper from '../../components/FilterWrapper';

let wrapper;
const props = {
    label: "Minimal spend",
    children: <span>test</span>
};

describe('FilterWrapper', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<FilterWrapper {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
