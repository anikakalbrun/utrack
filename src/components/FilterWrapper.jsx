import React from 'react';
import {string, node} from 'prop-types';

FilterWrapper.propTypes = {
    label: string,
    children: node
};

export default function FilterWrapper({label, children}) {
    return (
        <div className='col-sx-12 col-md-4 col-lg-3'>
            <div className='filter p-50'>
                <strong>{label}:</strong>
                {children}
            </div>
        </div>
    );
}