import React from 'react';
import Row from '../../components/Row';

let wrapper;

describe('Row', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Row children={<span>test</span>}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});
