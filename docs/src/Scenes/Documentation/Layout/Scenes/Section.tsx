import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor, isSize, noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const SectionRows: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'string',
        description: <td><code>medium</code> | <code>large</code></td>,
    },
]

const ContainerDocs = (props) => (
    <Container>
        <Title>Section</Title>
        <TableDocs rows={SectionRows} />
    </Container>
)

export default ContainerDocs;