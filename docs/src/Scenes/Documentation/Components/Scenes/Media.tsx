import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const MediaRows: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'string',
        description: <td><code>large</code></td>,
    }
];

const MediaDocs = (props) => (
    <Container>
        <Title>Media</Title>
        <TableDocs rows={MediaRows} />

        <hr/>

        <Title>MediaContent</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MediaLeft</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MediaRight</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default MediaDocs;