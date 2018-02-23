import React from 'react';
import {node} from 'prop-types';

Legend.propTypes = {
    children: node.isRequired
};

export default function Legend({children}) {
    return (
        <div className='legend'>{children}</div>
    );
}