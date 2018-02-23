import {getRandomArbitrary, getRandomArrayItem} from '../../utils/generateData';
import generateData from '../../utils/generateData';


describe('generateData', () => {

    it('getRandomArbitrary returns an random, integer number between given numbers', () => {
        const rundomNumber = getRandomArbitrary(1, 12);
        expect(rundomNumber).toBeGreaterThanOrEqual(1);
        expect(rundomNumber).toBeLessThanOrEqual(12);
        //number is a integer
        expect(rundomNumber).toEqual(parseInt(rundomNumber.toFixed(0)));
    });

    it('getRandomArrayItem returns an random item from array', () => {
        const array = ['test1', 'test2'];
        expect(array).toContain(getRandomArrayItem(array));

    });

    describe('generateData', () => {
        const generatedData = generateData(10);

        it('returns an array of specified length', () => {
            expect(generatedData.length).toEqual(10);
        });

        it('return an arry of objects with keys: id, birthday, spend, region, gender', () => {
            expect(Object.keys(generatedData[0])).toEqual(["id", "birthday", "spend", "region", "gender"]);
        });
    })

});
