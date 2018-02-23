//helper functions used in the filteredUsersSelector function
export const getUsersWithProperRegion = (region, regionFilter) =>
    regionFilter ? region === regionFilter : true;

export const getUsersWithPropperGender = (gender, genderFilter) =>
    genderFilter !== 'All' ? gender === genderFilter : true;

export const filterFunction = (users, spendFilter, regionFilter, genderFilter) =>
    users.filter(({spend, region, gender}) =>
        spend > spendFilter
        && getUsersWithProperRegion(region, regionFilter)
        && getUsersWithPropperGender(gender, genderFilter)
    );


//helper function used in chartMonthlyDataSelector
export const filterMonthly = (users =>
        users.reduce((total, user) => {
            total[user.birthday - 1] = total[user.birthday - 1] + 1;
            return total;
        }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);

//helper functions used in cumulativeDiscountInEachMonth
export const multiply = (value, multiplier) => value * multiplier;

export const totalAmountUpToIndex = (numberOfUsersInEachMonth, i, discount) =>
    numberOfUsersInEachMonth.reduce((total, current, index) => {
        if (index >= i) return total;
        return (multiply(current, discount) + total)
    }, 0);

//helper function used in chartCumulativeDataSelector
export const cumulativeDiscountInEachMonth = ((numberOfUsersInEachMonth, discount) =>
    numberOfUsersInEachMonth.map((currentValue, i) =>
        i > 0 ?
            multiply(currentValue, discount) + totalAmountUpToIndex(numberOfUsersInEachMonth, i, discount)
            : multiply(currentValue, discount)
    ));

//helper function used in chartDataSelector
export const generateChartData = (chartData, chartMonthlyDataSelector, chartCumulativeDataSelector) => {
    chartData.datasets[0].data = chartMonthlyDataSelector;
    chartData.datasets[1].data = chartCumulativeDataSelector;
    return chartData;
};