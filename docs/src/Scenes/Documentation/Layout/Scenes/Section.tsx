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

const SectionExample = `<body>
    <Section>
        <Container>
            <Title>Section</Title>
            <Subtitle> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading</Subtitle>
        </Container>
    </Section>
</body>
`;

const ContainerDocs = (props) => (
    <Container>
        <Title>Section</Title>
        <Subtitle>Use sections as direct children of <code>body</code></Subtitle>
        <Highlight>{SectionExample}</Highlight>

        <hr/>

        <Title>API</Title>
        <TableDocs rows={SectionRows} />
    </Container>
)

export default ContainerDocs;