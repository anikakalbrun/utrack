//Returns a integer, random number between min (inclusive) and max (exclusive)
export const getRandomArbitrary = (min, max) => parseInt((Math.random() * (max - min) + min).toFixed(0), 10);

const regions = ['United States', 'Europe', 'APAC', 'Latin America'];
const genders = [ 'Male', 'Female' ];

//Returns random item from array passed as argument
export const getRandomArrayItem = (regions) => regions[Math.floor(Math.random() * regions.length)];

//generates data
const generateData = (number) => {
    let generatedData = [];
    for(let i = 1; i <= number; i++) {
        generatedData.push({
            id: i,
            birthday : getRandomArbitrary(1, 12),
            spend: getRandomArbitrary(0, 5000),
            region: getRandomArrayItem(regions),
            gender: getRandomArrayItem(genders)
        })
    }
    return generatedData
};

export default generateData;