import * as types from '../actions/constants';
import {createSelector} from 'reselect';
import {chartInitialData} from '../chartFixtures';
import {
    filterFunction,
    filterMonthly,
    cumulativeDiscountInEachMonth,
    generateChartData
} from '../utils/reducersHelpers';

export const INITIAL_STATE = {
    data: [],
    //keeping the discount value in the reducer make it easy to change it without affecting the application logic
    discount: 5,
    spendFilter: 2500,
    regionFilter: '',
    genderFilter: 'All'
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_DATA:
            return {...state, data: action.payload};
        case types.SPEND_FILTER:
            return {...state, spendFilter: action.payload};
        case types.REGION_FILTER:
            return {...state, regionFilter: action.payload};
        case types.GENDER_FILTER:
            return {...state, genderFilter: action.payload};
        default:
            return state
    }
};

export default appReducer;

//selector functions make our components independent from the state shape
//if the state tree changes in the future we only need to make changes in the reducer file, not in our components
export const usersSelector = state => state.data;
export const spendFilterSelector = state => state.spendFilter;
export const regionFilterSelector = state => state.regionFilter;
export const genderFilterSelector = state => state.genderFilter;
export const discountSelector = state => state.discount;

//memorised selector that does not repeat the calculation if same arguments are passed - used to improve the performance of our app
//filteredUsersSelector returns an array of users displayed in the table
export const filteredUsersSelector =
    createSelector(usersSelector, spendFilterSelector, regionFilterSelector, genderFilterSelector, filterFunction);

//memorised selector that creates the monthly chart data
export const chartMonthlyDataSelector = createSelector(filteredUsersSelector, filterMonthly);

//memorised selector that creates the cumulative chart data
//calculates the accumulated cost over the course of the year if every one of our users was given a discount
//discount value is set by the appReducer
export const chartCumulativeDataSelector =
    createSelector(chartMonthlyDataSelector, discountSelector, cumulativeDiscountInEachMonth);

//memorised selector that creates chart data
export const chartDataSelector =
    createSelector(chartInitialData, chartMonthlyDataSelector, chartCumulativeDataSelector, generateChartData);

