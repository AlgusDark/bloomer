import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container, Content, Title } from './../../../../../../src';
import { isSize } from './../../Overview/Scenes/Helpers';

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
);

export default ContentDocs;
