import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title, Content } from './../../../../../../src';

const ContentRows: Docs.Row[] = [
    isSize,
];

const ContentExample = `<Content>
    <h1>Content</h1>
    <p>Is the component to handle WYSIWYG generated content</p>
</Content>
`;

const ContentDocs = (props) => (
    <Container>
        <Content>
            <h1>Content</h1>
            <p>Is the component to handle WYSIWYG generated content</p>
        </Content>
        <Highlight>{ContentExample}</Highlight>

        <hr />

        <Title>API</Title>
        <TableDocs rows={ContentRows} />
    </Container>
)

export default ContentDocs;