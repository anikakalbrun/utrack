import React, {Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {string, func} from 'prop-types';

import FilterWrapper from '../components/FilterWrapper';

export const options = [
    {value: 'United States', label: 'United States'},
    {value: 'Europe', label: 'Europe'},
    {value: 'APAC', label: 'APAC'},
    {value: 'Latin America', label: 'Latin America'},
];

class SelectRegion extends Component {

    static propTypes = {
        value: string,
        setRegionFilter: func.isRequired
    };

    static defaultProps = {
        value: ''
    };

    handleChange = (selectedOption) => {
        selectedOption && selectedOption.value ?
            this.props.setRegionFilter(selectedOption.value) :
            this.props.setRegionFilter('')
    };

    render() {
        const {value} = this.props;

        return (
            <FilterWrapper label={'Select region'}>
                <div className='empty'/>
                <Select
                    name="region"
                    lebel='region'
                    value={value}
                    onChange={this.handleChange}
                    options={options}
                    placeholder='Select region'
                />
            </FilterWrapper>
        );
    }
}

export default SelectRegion