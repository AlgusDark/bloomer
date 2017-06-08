import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const IconRows: Docs.Row[] = [
    isSize,
    {
        prop: 'isAlign',
        type: 'string',
        description: <td> <code>left</code> | <code>right</code> </td>,
    }
]

const IconDocs = (props) => (
    <Container>
        <Title>Icon</Title>
        <TableDocs rows={IconRows} />
    </Container>
)

export default IconDocs;