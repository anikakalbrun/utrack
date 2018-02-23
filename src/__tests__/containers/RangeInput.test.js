import React from 'react';
import RangeInput from '../../containers/RangeInput';
import {minValue, maxValue, labels, format$} from '../../containers/RangeInput';

let wrapper;
const setSpendFilter = jest.fn();
const props = {
    setSpendFilter,
    value: 12
};

describe('RangeInput', () => {

    beforeEach(() => {
        wrapper = shallow(<RangeInput {...props}/>);
    });

    it('renders FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').length).toEqual(1);
    });

    it('passes the label property to FilterWrapper', () => {
        expect(wrapper.find('FilterWrapper').props().label).toEqual('Minimal spend');
    });

    it('renders selected value displayed in a div', () => {
        expect(wrapper.find('div.value').html()).toMatchSnapshot();
    });

    it('renders Slider', () => {
        expect(wrapper.find('Slider').length).toEqual(1);
    });

    it('passes proper properties to Slider', () => {
        expect(wrapper.find('Slider').props().value).toEqual(12);
        expect(wrapper.find('Slider').props().onChange).toBeTruthy();
        expect(wrapper.find('Slider').props().formatLabel).toEqual(format$(12));
        expect(wrapper.find('Slider').props().min).toEqual(minValue);
        expect(wrapper.find('Slider').props().max).toEqual(maxValue);
        expect(wrapper.find('Slider').props().labels).toEqual(labels);
    });

    it('changing sliders value triggers the setSpendFilter action creator', () => {
        wrapper.find('Slider').simulate('change');
        expect(setSpendFilter).toHaveBeenCalled();
    });
});
