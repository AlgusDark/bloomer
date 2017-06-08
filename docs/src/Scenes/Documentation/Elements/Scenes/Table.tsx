import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title } from './../../../../../../src';

const TableBulmaRows: Docs.Row[] = [
    {
        prop: 'isBordered',
        type:'bool',
    },
    {
        prop: 'isStriped',
        type:'bool',
    },
    {
        prop: 'isNarrow',
        type:'bool',
    },
]

const TableBulmaDocs = (props) => (
    <Container>
        <Title>Table</Title>
        <TableDocs rows={TableBulmaRows} />
    </Container>
)

export default TableBulmaDocs;