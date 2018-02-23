import React, {Component} from 'react';
import {connect} from "react-redux";
import {string, object, func, array, number} from 'prop-types';

import {
    getData,
    setSpendFilter,
    setRegionFilter,
    setGenderFilter
} from '../actions/index'
import {
    filteredUsersSelector,
    spendFilterSelector,
    regionFilterSelector,
    genderFilterSelector,
    chartDataSelector
} from '../reducers/index';
import InputRange from './RangeInput';
import SelectRegion from './SelectRegion';
import SelectGender from './SelectGender';
import DiscountCostLineChart from '../components/DiscountCostLineChart';
import UserTable from '../components/UserTable';
import Row from '../components/Row';

export class Root extends Component {

    static propTypes = {
        getData: func.isRequired,
        data: array.isRequired,
        spendFilter: number.isRequired,
        setSpendFilter: func.isRequired,
        regionFilter: string.isRequired,
        setRegionFilter: func.isRequired,
        genderFilter: string.isRequired,
        setGenderFilter: func.isRequired,
        chartData: object.isRequired
    };

    componentDidMount() {
        //generates the application data
        //getData takes as argument the number of records that should be generated
        this.props.getData(1000);
    }

    render() {
        const {
            data,
            spendFilter,
            setSpendFilter,
            regionFilter,
            setRegionFilter,
            genderFilter,
            setGenderFilter,
            chartData
        } = this.props;

        return (
            <div className='container'>
                <Row>
                    <InputRange value={spendFilter} setSpendFilter={setSpendFilter}/>
                    <SelectRegion value={regionFilter} setRegionFilter={setRegionFilter}/>
                    <SelectGender value={genderFilter} setGenderFilter={setGenderFilter}/>
                </Row>
                <Row>
                    <DiscountCostLineChart data={chartData}/>
                </Row>
                <Row>
                    <UserTable data={data}/>
                </Row>
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {
        data: filteredUsersSelector(state),
        chartData: chartDataSelector(state),
        spendFilter: spendFilterSelector(state),
        regionFilter: regionFilterSelector(state),
        genderFilter: genderFilterSelector(state)
    }
}

export default connect(mapStateToProps, {getData, setSpendFilter, setRegionFilter, setGenderFilter})(Root)