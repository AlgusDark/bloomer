import * as React from 'react';

import { Table } from './../../../src';

const TableDocs = ({ rows }) => (
    <Table isStriped className='docs'>
        <tbody>
            <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
            {rows.map((row, i) => (
                <tr key={i}>
                    <td>{row.prop}</td>
                    <td>{row.type}</td>
                    {row.description || <td />}
                </tr>
            ))}
        </tbody>
    </Table>
)

export default TableDocs;