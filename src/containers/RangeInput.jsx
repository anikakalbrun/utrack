import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../styles/css/RangeInput.css';
import throttle from 'lodash.throttle';
import {number, func} from 'prop-types';

import FilterWrapper from '../components/FilterWrapper';

export const minValue = 0;
export const maxValue = 5000;
export const labels = {
    [minValue]: `$${minValue}`,
    [maxValue]: `$${maxValue}`
};
export const format$ = value => `$${value}`;

class RangeInput extends Component {

    static propTypes = {
        value: number,
        setSpendFilter: func.isRequired
    };

    static defaultProps = {
        value: 0
    };

    handleChange = (value) => {
        //only invoke this.props.setSpendFilter at most once per every 300 milliseconds
        const throttled = throttle(this.props.setSpendFilter, 300);
        throttled(value);
    };

    render() {
        const {value} = this.props;
        return (
            <FilterWrapper label={'Minimal spend'}>
                <div className='value'>{format$(value)}</div>
                <Slider
                    value={value}
                    onChange={this.handleChange}
                    min={minValue}
                    max={maxValue}
                    formatLabel={format$(value)}
                    format={format$}
                    labels={labels}
                />
            </FilterWrapper>
        )
    }
}

export default RangeInput