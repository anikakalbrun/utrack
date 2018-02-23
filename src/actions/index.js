import generateData from '../utils/generateData';
import * as types from './constants';

export const getData = (numberOfRecords) => ({
    type: types.GET_DATA,
    payload: generateData(numberOfRecords)
});

export const setSpendFilter = (filter) => {
    return {
        type: types.SPEND_FILTER,
        payload: filter
    }
};

export const setRegionFilter = (filter) => {
    return {
        type: types.REGION_FILTER,
        payload: filter
    }
};

export const setGenderFilter = (filter) => {
    return {
        type: types.GENDER_FILTER,
        payload: filter
    }
};

