import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';
import { noModifiers } from './../../Overview/Scenes/Helpers';

import { Container, Title, Subtitle, Checkbox, Radio, Help, Heading, Columns, Column } from './../../../../../../src';

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

const TitleSizeExample = `<Title isSize={1}>isSize={1}</Title>
<Title isSize={2}>isSize={2}</Title>
<Title isSize={3}>isSize={3}</Title>
<Title isSize={4}>isSize={4}</Title>
<Title isSize={5}>isSize={5}</Title>
<Title isSize={6}>isSize={6}</Title>
{/* by default, it will render h1 */}
`;

const TitleHeadingSize = `<Title isHeading={1}>isHeading={1}</Title>
<Title isHeading={2}>isHeading={2}</Title>
<Title isHeading={3}>isHeading={3}</Title>
<Title isHeading={4}>isHeading={4}</Title>
<Title isHeading={5}>isHeading={5}</Title>
<Title isHeading={6}>isHeading={6}</Title>
{/* use developer tools to se the final render elements  */}
`;

const SubtitleSizeExample = `<Subtitle isSize={1}>isSize={1}</Subtitle>
<Subtitle isSize={2}>isSize={2}</Subtitle>
<Subtitle isSize={3}>isSize={3}</Subtitle>
<Subtitle isSize={4}>isSize={4}</Subtitle>
<Subtitle isSize={5}>isSize={5}</Subtitle>
<Subtitle isSize={6}>isSize={6}</Subtitle>
{/* by default, it will render h2 */}
`;

const SubtitleHeadingSize = `<Subtitle isHeading={1}>isHeading={1}</Subtitle>
<Subtitle isHeading={2}>isHeading={2}</Subtitle>
<Subtitle isHeading={3}>isHeading={3}</Subtitle>
<Subtitle isHeading={4}>isHeading={4}</Subtitle>
<Subtitle isHeading={5}>isHeading={5}</Subtitle>
<Subtitle isHeading={6}>isHeading={6}</Subtitle>
{/* use developer tools to se the final render elements  */}
`;

const HeadingExample = `<Heading>Useful for <code>uppercase</code> font</Heading>`;

const SubtitleExample = ``;

const TitleDocs = (props) => (
    <Container>
        <Title>Title</Title>
        <Columns>
            <Column hasTextAlign='centered'>
                <Title isSize={1}>isSize={1}</Title>
                <Title isSize={2}>isSize={2}</Title>
                <Title isSize={3}>isSize={3}</Title>
                <Title isSize={4}>isSize={4}</Title>
                <Title isSize={5}>isSize={5}</Title>
                <Title isSize={6}>isSize={6}</Title>
            </Column>
            <Column>
                <Highlight>{TitleSizeExample}</Highlight>
            </Column>
        </Columns>

        <Columns>
            <Column hasTextAlign='centered'>
                <Title isHeading={1}>isHeading={1}</Title>
                <Title isHeading={2}>isHeading={2}</Title>
                <Title isHeading={3}>isHeading={3}</Title>
                <Title isHeading={4}>isHeading={4}</Title>
                <Title isHeading={5}>isHeading={5}</Title>
                <Title isHeading={6}>isHeading={6}</Title>
            </Column>
            <Column>
                <Highlight>{TitleHeadingSize}</Highlight>
            </Column>
        </Columns>

        <Title>API</Title>
        <TableDocs rows={TitleRows} />

        <hr />

        <Title>Subtitle</Title>
        <Columns>
            <Column hasTextAlign='centered'>
                <Subtitle isSize={1}>isSize={1}</Subtitle>
                <Subtitle isSize={2}>isSize={2}</Subtitle>
                <Subtitle isSize={3}>isSize={3}</Subtitle>
                <Subtitle isSize={4}>isSize={4}</Subtitle>
                <Subtitle isSize={5}>isSize={5}</Subtitle>
                <Subtitle isSize={6}>isSize={6}</Subtitle>
            </Column>
            <Column>
                <Highlight>{SubtitleSizeExample}</Highlight>
            </Column>
        </Columns>

        <Columns>
            <Column hasTextAlign='centered'>
                <Subtitle isHeading={1}>isHeading={1}</Subtitle>
                <Subtitle isHeading={2}>isHeading={2}</Subtitle>
                <Subtitle isHeading={3}>isHeading={3}</Subtitle>
                <Subtitle isHeading={4}>isHeading={4}</Subtitle>
                <Subtitle isHeading={5}>isHeading={5}</Subtitle>
                <Subtitle isHeading={6}>isHeading={6}</Subtitle>
            </Column>
            <Column>
                <Highlight>{SubtitleHeadingSize}</Highlight>
            </Column>
        </Columns>

        <Title>API</Title>
        <TableDocs rows={SubtitleRows} />

        <hr />

        <Title style={{ marginTop: 10 }}>Heading</Title>
        <Columns>
            <Column isSize={3}>
                <Heading> Useful for <code>uppercase</code> font.</Heading>
            </Column>
            <Column>
                <Highlight>{HeadingExample}</Highlight>
            </Column>
        </Columns>

        <Title>API</Title>
        <Subtitle> {noModifiers}</Subtitle>
    </Container>
)

export default TitleDocs;