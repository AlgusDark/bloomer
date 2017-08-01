import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container, Table, Title } from './../../../../../../src';

const TableBulmaRows: Docs.Row[] = [
    {
        prop: 'isBordered',
        type: 'bool',
    },
    {
        prop: 'isStriped',
        type: 'bool',
    },
    {
        prop: 'isNarrow',
        type: 'bool',
    },
];

const TableExample = `<Table isBordered isStriped isNarrow>
    <thead>
        <tr>
            <th>Name</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Ryu</td>
            <td>10000</td>
        </tr>
        <tr className='is-selected'>
            <td>Ken</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>Akuma</td>
            <td>1200</td>
        </tr>
    </tbody>
</Table>
`;

const TableBulmaDocs = (props) => (
    <Container>
        <Title>Table</Title>
        <Table isBordered isStriped isNarrow>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ryu</td>
                    <td>10000</td>
                </tr>
                <tr className="is-selected">
                    <td>Ken</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>Akuma</td>
                    <td>1200</td>
                </tr>
            </tbody>
        </Table>
        <Highlight>{TableExample}</Highlight>
        <p>In <a href="http://bulma.io/documentation/elements/table/">Bulma</a>, {'<tr>'}
         can have a <code>.is-selected</code> modifier, but Bloomer doesn't provide a {'<tr>'} wrapper,
          so you should apply that in your className</p>

        <hr/>
        <Title>API</Title>
        <TableDocs rows={TableBulmaRows} />
    </Container>
);

export default TableBulmaDocs;
