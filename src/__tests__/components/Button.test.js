import React from 'react';
import Button from '../../components/Button';

let wrapper;
const handleClick = jest.fn();
const props = {
    text: "Submit",
    type: 'button',
    btnClass: "success",
    handleClick,
    disabled: undefined
};

describe('Button', () => {

    it('renders correctly', () => {
        wrapper = renderer.create(<Button {...props}/>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

    it('button click calls handleClick prop', () => {
        wrapper = shallow(<Button {...props}/>);
        wrapper.find('button').at(0).simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});
