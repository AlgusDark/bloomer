import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title, Notification, Columns, Column, } from './../../../../../../src';

const ContainerRows: Docs.Row[] = [
    {
        prop: 'isFluid',
        type: 'bool',
    },
]

const ContainerExample = `<Container>
    <Notification>This container is <strong>centered</strong> on desktop.</Notification>
</Container>
`;

const ContainerFluidExample = `<Container isFluid style={{ marginTop: 10 }}>
    <Notification isColor='warning'>This container is <strong>fluid</strong>: it will have a 20px gap on either side.</Notification>
</Container>
`;

const ContainerDocs = (props) => (
    <Container>
        <Title>Container</Title>
        <Container style={{ margin: '10px 0' }}>
            <Notification isColor='success'>This container is <strong>centered</strong> on desktop.</Notification>
        </Container>
        <Highlight>{ContainerExample}</Highlight>

        <Container isFluid style={{ margin: '10px 0' }}>
            <Notification isColor='warning'>This container is <strong>fluid</strong>: it will have a 20px gap on either side.</Notification>
        </Container>
        <Highlight>{ContainerFluidExample}</Highlight>

        <hr />

        <Title>API</Title>
        <TableDocs rows={ContainerRows} />
    </Container>
)

export default ContainerDocs;