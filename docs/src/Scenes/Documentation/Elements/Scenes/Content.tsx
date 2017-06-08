import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title } from './../../../../../../src';

const ContentRows: Docs.Row[] = [
    isSize,
]

const ContentDocs = (props) => (
    <Container>
        <Title>Content</Title>
        <TableDocs rows={ContentRows} />
    </Container>
)

export default ContentDocs;