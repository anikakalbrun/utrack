import React from 'react';
import { Root, mapStateToProps } from '../../containers/Root';

let wrapper;
const getData = jest.fn();
const props = {
    getData,
    data: [],
    spendFilter: 200,
    setSpendFilter: jest.fn(),
    regionFilter: 'Europe',
    setRegionFilter: jest.fn(),
    genderFilter: 'Female',
    setGenderFilter: jest.fn(),
    chartData: {}
};

describe('Root', () => {

    it('has a componentDidMount method that calls the getData action creator', () => {
        wrapper = mount(<Root {...props}/>);
        expect(getData).toHaveBeenCalled()
    });

    beforeEach(() => {
        wrapper = shallow(<Root {...props}/>);
    });

    it('renders a container div', () => {
        expect(wrapper.find('div.container').length).toEqual(1)
    });

    it('renders a Row with InputRange, SelectRegion, SelectGender', () => {
        expect(wrapper.find('Row').at(0).props().children).toMatchSnapshot()
    });

    it('renders a Row with DiscountCostLineChart', () => {
        expect(wrapper.find('Row').at(1).props().children).toMatchSnapshot()
    });

    it('renders a Row with UserTable', () => {
        expect(wrapper.find('Row').at(2).props().children).toMatchSnapshot()
    });

    it('mapStateToProps function return an object with proper keys', () => {
        const state = {
            "data": [
                {
                    "id": 1,
                    "birthday": 6,
                    "spend": 2658,
                    "region": "Latin America",
                    "gender": "Male"
                }
            ],
            "discount": 5,
            "spendFilter": 2500,
            "regionFilter": "",
            "genderFilter": "All"
        };
        expect(Object.keys(mapStateToProps(state))).toEqual(["data", "chartData", "spendFilter", "regionFilter", "genderFilter"])
    });
});
