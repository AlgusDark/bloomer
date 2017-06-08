import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const TagRows: Docs.Row[] = [
    isColor,
    {
        prop: 'isSize',
        type: 'string',
        description: <td><code>medium</code> | <code>large</code></td>
    }
]

const TagDocs = (props) => (
    <Container>
        <Title>Tag</Title>
        <TableDocs rows={TagRows} />
    </Container>
)

export default TagDocs;