import * as func from '../../utils/reducersHelpers';


describe('getUsersWithProperRegion', () => {
    it('returns proper value', () => {
        expect(func.getUsersWithProperRegion('Europe', 'Europe')).toEqual(true);
        expect(func.getUsersWithProperRegion('Europe', 'Asia')).toEqual(false);
        expect(func.getUsersWithProperRegion('Europe', undefined)).toEqual(true);
    });
});

describe('getUsersWithProperGender', () => {
    it('returns proper value', () => {
        expect(func.getUsersWithPropperGender('Male', 'Male')).toEqual(true);
        expect(func.getUsersWithPropperGender('Male', 'Female')).toEqual(false);
        expect(func.getUsersWithProperRegion('Male', 'All')).toEqual(false);
    });
});

describe('getUsersWithProperGender', () => {
    it('returns proper value', () => {
        expect(func.getUsersWithPropperGender('Male', 'Male')).toEqual(true);
        expect(func.getUsersWithPropperGender('Male', 'Female')).toEqual(false);
        expect(func.getUsersWithProperRegion('Male', 'All')).toEqual(false);
    });
});