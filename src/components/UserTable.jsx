import React from 'react';
import {array} from 'prop-types';
import {Table} from 'antd';
import 'antd/dist/antd.css';

UserTable.propTypes = {
    data: array
};

UserTable.defaultProps = {};

const columns = [{
    title: 'User Id',
    dataIndex: 'id',
    key: 'id',
}, {
    title: 'Birthday',
    dataIndex: 'birthday',
    key: 'birthday',
}, {
    title: 'Spend',
    dataIndex: 'spend',
    key: 'spend',
}, {
    title: 'Region',
    dataIndex: 'region',
    key: 'region',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
}
];

export default function UserTable({data}) {
    return (
        <div className='width100 p-50 tableContainer'>
            <Table dataSource={data} columns={columns} rowKey="id"/>
        </div>
    );
}