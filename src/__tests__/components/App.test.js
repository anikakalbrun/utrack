import React from 'react';
import App from '../../components/App';

let wrapper;

describe('App', () => {

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('renders Provider', () => {
        expect(wrapper.find('Provider').length).toEqual(1);
    });

    it('passes store to Provider', () => {
        expect(wrapper.find('Provider').props().store.dispatch).toBeTruthy();
        expect(wrapper.find('Provider').props().store.getState).toBeTruthy();
        expect(wrapper.find('Provider').props().store.subscribe).toBeTruthy();
    });

    it('renders Root', () => {
        expect(wrapper.find('Provider').props().children).toMatchSnapshot();
    });
});

