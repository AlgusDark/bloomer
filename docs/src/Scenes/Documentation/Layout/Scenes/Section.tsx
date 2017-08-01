import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container, Subtitle, Title } from './../../../../../../src';
import { isColor, isSize, noModifiers } from './../../Overview/Scenes/Helpers';

const SectionRows: Docs.Row[] = [
    {
        description: <td><code>medium</code> | <code>large</code></td>,
        prop: 'isSize',
        type: 'string',
    },
];

const SectionExample = `<body>
    <Section>
        <Container>
            <Title>Section</Title>
            <Subtitle> A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
            </Subtitle>
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
);

export default ContainerDocs;
