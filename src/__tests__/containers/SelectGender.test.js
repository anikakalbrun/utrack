import React from 'react';
import SelectGender from '../../containers/SelectGender';

let wrapper;
const setGenderFilter = jest.fn();
const props = {
    setGenderFilter,
    value: 'All'
};

describe('RangeInput', () => {

    beforeEach(() => {
        wrapper = shallow(<SelectGender {...props}/>);
    });

    it('renders FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').length).toEqual(1);
    });

    it('passes the label property to FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').props().label).toEqual('Gender');
    });

    it('renders a div with class empty', () => {
        expect(wrapper.find('div.empty').length).toEqual(1);
    });

    it('renders a div with class btn-group, role="group", aria-label="gender"', () => {
        expect(wrapper.find('div.btn-group[role="group"][aria-label="gender"]').length).toEqual(1);
    });

    it('renders a three buttons', () => {
        expect(wrapper.find('Button').length).toEqual(3);
    });

    it('passes proper props to the first button', () => {
        expect(wrapper.find('Button').at(0).props()).toMatchSnapshot();
    });

    it('passes proper props to the second button', () => {
        expect(wrapper.find('Button').at(1).props()).toMatchSnapshot();
    });

    it('passes proper props to the third button', () => {
        expect(wrapper.find('Button').at(2).props()).toMatchSnapshot();
    });

    it('clicking the first button calls setGenderFilter withe the value "Male"', () => {
        wrapper.find('Button').at(0).dive().find('button').simulate('click');
        expect(setGenderFilter).toHaveBeenCalledWith('Male');
    });

    it('clicking the second button calls setGenderFilter withe the value "Female"', () => {
        wrapper.find('Button').at(1).dive().find('button').simulate('click');
        expect(setGenderFilter).toHaveBeenCalledWith('Female');
    });

    it('clicking the third button calls setGenderFilter withe the value "All"', () => {
        wrapper = shallow(<SelectGender setGenderFilter={setGenderFilter}
                                        value={'Male'}/>);
        wrapper.find('Button').at(2).dive().find('button').simulate('click');
        expect(setGenderFilter).toHaveBeenCalledWith('All');
    });
});
