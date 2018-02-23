import React, {Component} from 'react';
import {string, func} from 'prop-types';

import FilterWrapper from '../components/FilterWrapper';
import Button from '../components/Button';

const getBtnClass = (value, btnText) => value === btnText ? "btn-success" : "btn-light";
const isBtnDisabled = (btnClass) => btnClass === "btn-success";

class SelectGender extends Component {

    static propTypes = {
        value: string,
        setGenderFilter: func
    };

    static defaultProps = {
        value: 'All'
    };

    handleClickMaleBtn = () => {
        this.props.setGenderFilter('Male');
    };

    handleClickFemaleBtn = () => {
        this.props.setGenderFilter('Female');
    };

    handleClickAllBtn = () => {
        this.props.setGenderFilter('All');
    };

    render() {
        const {value} = this.props;
        return (
            <FilterWrapper label='Gender'>
                <div className='empty'/>
                <div className="btn-group" role="group" aria-label="gender">
                    <Button text='Male'
                            btnClass={getBtnClass(value, 'Male')}
                            disabled={isBtnDisabled(getBtnClass(value, 'Male'))}
                            handleClick={this.handleClickMaleBtn}/>
                    <Button text='Female'
                            btnClass={getBtnClass(value, 'Female')}
                            disabled={isBtnDisabled(getBtnClass(value, 'Female'))}
                            handleClick={this.handleClickFemaleBtn}/>
                    <Button text='All'
                            btnClass={getBtnClass(value, 'All')}
                            disabled={isBtnDisabled(getBtnClass(value, 'All'))}
                            handleClick={this.handleClickAllBtn}
                    />
                </div>
            </FilterWrapper>
        )
    }
}

export default SelectGender