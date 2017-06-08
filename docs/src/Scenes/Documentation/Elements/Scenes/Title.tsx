import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container, Title, Subtitle, Checkbox, Radio, Help, Heading } from './../../../../../../src';

const headings = description => <td><code>1</code> | <code>2</code> | <code>3</code> | <code>4</code> | <code>5</code> | <code>6</code> {description}</td>
const byDefault = (component, level) => <td>By default, {component} is a heading level {level} (<code>h{level}</code>). With this prop you can turn it as a <code>p</code></td>

const row = (component, level) => [
    {
        prop: 'isHeading',
        type: 'number',
        description: headings(<span> — Level of heading element <em>h1/h2/...</em></span>),
    },
    {
        prop: 'isSize',
        type: 'number',
        description: headings(<span> — Bulma size element <em>.is-1/.is-2/...</em></span>),
    },
    {
        prop: 'isSpaced',
        type: 'bool',
    },
    {
        prop: 'isParagraph',
        type: 'bool',
        description: byDefault(component, level)
    },
];

const TitleRows: Docs.Row[] = [
    ...row('Title', '1')
];

const SubtitleRows: Docs.Row[] = [
    ...row('Subtitle', '2')
];

const FormDocs = (props) => (
    <Container>
        <Title>Title</Title>
        <TableDocs rows={TitleRows} />

        <hr />

        <Title>Subtitle</Title>
        <TableDocs rows={SubtitleRows} />

        <hr />

        <Title isSpaced>Heading</Title>
        <Subtitle> No modifiers, only those inherited by the <Link to='/documentation/overview/helpers'>Helpers</Link> modifiers</Subtitle>
    </Container>
)

export default FormDocs;