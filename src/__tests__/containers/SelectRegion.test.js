import React from 'react';
import SelectRegion from '../../containers/SelectRegion';
import {options} from '../../containers/SelectRegion';

let wrapper;
const setRegionFilter = jest.fn();
const props = {
    setRegionFilter,
    value: 'Europe'
};

describe('RangeInput', () => {

    beforeEach(() => {
        wrapper = shallow(<SelectRegion {...props}/>);
    });

    it('renders FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').length).toEqual(1);
    });

    it('passes the label property to FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').props().label).toEqual('Select region');
    });

    it('renders a div with class empty', () => {
        expect(wrapper.find('div.empty').length).toEqual(1);
    });

    it('renders the Select component', () => {
        expect(wrapper.find('Select').length).toEqual(1);
    });

    it('passes proper properties to Slider', () => {
        expect(wrapper.find('Select').props().name).toEqual('region');
        expect(wrapper.find('Select').props().lebel).toEqual('region');
        expect(wrapper.find('Select').props().value).toEqual('Europe');
        expect(wrapper.find('Select').props().options).toEqual(options);
        expect(wrapper.find('Select').props().onChange).toBeTruthy();
        expect(wrapper.find('Select').props().placeholder).toEqual('Select region');
    });

    it('should call setRegionFilter when input value changes', () => {
        const wrapper = mount(<SelectRegion {...props}/>);
        const selectWrapper = wrapper.find('input[aria-activedescendant="react-select-2--value"]');
        selectWrapper.simulate('change', { target: { value: options[1].value } });
        selectWrapper.simulate('keyDown', { keyCode: 9, key: 'Tab' }); // validate the selection
        expect(setRegionFilter).toHaveBeenCalledWith(options[1].value);
    });
});

