import React from 'react';
import * as actions from '../../actions';
import * as types from '../../actions/constants';

describe('actions', () => {

    it('getData should create an action to generate the application data', () => {
        const numberOfRecords = 1;
        const action = actions.getData(numberOfRecords);
        //action should have proper type property
        expect(action.type).toEqual(types.GET_DATA);
        //action should have an payload property with a value, that is an array and contains an object with proper keys
        expect(Object.keys(action.payload[0])).toEqual(["id", "birthday", "spend", "region", "gender"]);
    });

    it('setSpendFilter should create an action to store the "Minimal Spend" value', () => {
        const filter = 1000;
        const expectedAction = {
            type: types.SPEND_FILTER,
            payload: filter
        };
        expect(actions.setSpendFilter(filter)).toEqual(expectedAction)
    });

    it('setRegionFilter should create an action to store the selected region', () => {
        const filter = 1000;
        const expectedAction = {
            type: types.REGION_FILTER,
            payload: filter
        };
        expect(actions.setRegionFilter(filter)).toEqual(expectedAction)
    });

    it('setGenderFilter should create an action to store the selected gender', () => {
        const filter = 1000;
        const expectedAction = {
            type: types.GENDER_FILTER,
            payload: filter
        };
        expect(actions.setGenderFilter(filter)).toEqual(expectedAction)
    });
});
