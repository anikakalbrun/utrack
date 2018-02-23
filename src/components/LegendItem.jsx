import React from 'react';
import {string} from 'prop-types';

LegendItem.propTypes = {
    color: string.isRequired,
    label: string.isRequired
};

export default function LegendItem({color, label}) {
    return (
        <div className='legend-item'>
            <div style={{backgroundColor: color}} className='legend-box'/>
            <div className='legend-text'>{label}</div>
        </div>
    );
}