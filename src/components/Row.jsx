import React from 'react';
import {node} from 'prop-types';

Row.propTypes = {
    children: node.isRequired
};

export default function Row({children}) {
    return (
        <div className='row'>{children}</div>
    );
}