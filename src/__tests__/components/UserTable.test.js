import React from 'react';
import UserTable from '../../components/UserTable';

let wrapper;

describe('UserTable', () => {

    beforeEach(() => {
        wrapper = shallow(<UserTable data={[]}/>);
    });

    it('renders correctly a wrapper div', () => {
        expect(wrapper.find('div.width100.p-50.tableContainer').length).toEqual(1);
        expect(wrapper.find('Table').length).toEqual(1);
        expect(wrapper.find('Table').props().columns).toMatchSnapshot();
    });

    it('renders the Table component', () => {
        expect(wrapper.find('Table').length).toEqual(1);
    });

    it('passes to the Table a columns property', () => {
        expect(wrapper.find('Table').props().columns).toMatchSnapshot();
    });

    it('passes to the Table a rowKey="id" property', () => {
        expect(wrapper.find('Table').props().rowKey).toEqual('id');
    });

    it('passes to the Table a dataSource property', () => {
        expect(wrapper.find('Table').props().dataSource).toEqual([]);
    });
});
