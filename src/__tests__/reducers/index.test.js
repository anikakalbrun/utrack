import React from 'react';
import appReducer from '../../reducers';
import {INITIAL_STATE} from '../../reducers';
import * as types from '../../actions/constants'

describe('appReducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle GET_DATA', () => {
        const data = [{id: 1, birthday : 1, spend: 500, region: "Europe", gender:"Male"}];
        const stateBefore = {};
        const action = {
            type: types.GET_DATA,
            payload: data
        };
        const stateAfter = { data };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(appReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should handle SPEND_FILTER', () => {
        const filter = 500;
        const stateBefore = {};
        const action = {
            type: types.SPEND_FILTER,
            payload: filter
        };
        const stateAfter = { spendFilter: filter };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(appReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should handle REGION_FILTER', () => {
        const filter = 'Europe';
        const stateBefore = {};
        const action = {
            type: types.REGION_FILTER,
            payload: filter
        };
        const stateAfter = { regionFilter: filter };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(appReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should handle GENDER_FILTER', () => {
        const filter = 'Male';
        const stateBefore = {};
        const action = {
            type: types.GENDER_FILTER,
            payload: filter
        };
        const stateAfter = { genderFilter: filter };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(appReducer(stateBefore, action)).toEqual(stateAfter)
    });
});