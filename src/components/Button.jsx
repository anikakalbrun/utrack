import React from 'react';
import {string, bool, func} from 'prop-types';

Button.propTypes = {
    text: string,
    type: string,
    btnClass: string,
    handleClick: func,
    disabled: bool
};

Button.defaultProps = {
    disabled: false,
    btnClass: '',
    type: "button"
};

export default function Button({text, type, btnClass, handleClick, disabled}) {
    return (
        <button type={type}
                className={`btn ${btnClass}`}
                onClick={handleClick}
                disabled={disabled}
        >{text}</button>
    );
}