import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title } from './../../../../../../src';

const ContainerRows: Docs.Row[] = [
    {
        prop: 'isFluid',
        type: 'bool',
    },
]

const ContainerDocs = (props) => (
    <Container>
        <Title>Container</Title>
        <TableDocs rows={ContainerRows} />
    </Container>
)

export default ContainerDocs;