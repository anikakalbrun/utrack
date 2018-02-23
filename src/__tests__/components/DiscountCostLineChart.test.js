import React from 'react';
import DiscountCostLineChart from '../../components/DiscountCostLineChart';

let wrapper;
const data = {
    labels: ["January", "February"],
    datasets: []
};

describe('DiscountCostLineChart', () => {

    it('renders Legend and two LegendItem components', () => {
        wrapper = shallow(<DiscountCostLineChart/>);
        expect(wrapper.props().children).toMatchSnapshot();
    });

    it('renders LineChart when data prop is passed', () => {
        wrapper = shallow(<DiscountCostLineChart data={data}/>);
        expect(wrapper.props().children).toMatchSnapshot();
    });

    it('renders the container div', () => {
        wrapper = shallow(<DiscountCostLineChart data={data}/>);
        expect(wrapper.find('div.width100.p-50.h-300').length).toEqual(1);
    });

});
