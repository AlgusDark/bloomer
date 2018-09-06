import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';
import { noModifiers } from './../../Overview/Scenes/Helpers';

import { Checkbox, Column, Columns, Container, Heading, Help, Radio, Subtitle, Title } from './../../../../../../src';

const byDefault = (component, level) => <td>By default, {component} is a heading level {level} (
  <code>h{level}</code>). With this prop you can turn it as a <code>p</code></td>;
const headings = (description) => <td><code>1</code> | <code>2</code> | <code>3</code> | <code>4</code> |
 <code>5</code> | <code>6</code> {description}</td>;

const row = (component, level) => [
    {
        description: headings(<span> — Bulma size element <em>.is-1/.is-2/...</em></span>),
        prop: 'isSize',
        type: 'number',
    },
    {
        prop: 'isSpaced',
        type: 'bool',
    },
];

const TitleRows: Docs.Row[] = [
    ...row('Title', '1'),
];

const SubtitleRows: Docs.Row[] = [
    ...row('Subtitle', '2'),
];

const TitleSizeExample = `<Title isSize={1}>isSize={1}</Title>
<Title isSize={2}>isSize={2}</Title>
<Title isSize={3}>isSize={3}</Title>
<Title isSize={4}>isSize={4}</Title>
<Title isSize={5}>isSize={5}</Title>
<Title isSize={6}>isSize={6}</Title>
{/* by default, it will render h1 */}
`;

const TitleHeadingSize = `<Title tag='h1'>tag='h1'</Title>
<Title tag='h2'>tag='h2'</Title>
<Title tag='h3'>tag='h3'</Title>
<Title tag='h4'>tag='h4'</Title>
<Title tag='h5'>tag='h5'</Title>
<Title tag='h6'>tag='h6'</Title>
{/* use developer tools to see the final render elements */}
`;

const SubtitleSizeExample = `<Subtitle isSize={1}>isSize={1}</Subtitle>
<Subtitle isSize={2}>isSize={2}</Subtitle>
<Subtitle isSize={3}>isSize={3}</Subtitle>
<Subtitle isSize={4}>isSize={4}</Subtitle>
<Subtitle isSize={5}>isSize={5}</Subtitle>
<Subtitle isSize={6}>isSize={6}</Subtitle>
{/* by default, it will render h2 */}
`;

const SubtitleHeadingSize = `<Subtitle tag='h1'>tag='h1'</Subtitle>
<Subtitle tag='h2'>tag='h2'</Subtitle>
<Subtitle tag='h3'>tag='h3'</Subtitle>
<Subtitle tag='h4'>tag='h4'</Subtitle>
<Subtitle tag='h5'>tag='h5'</Subtitle>
<Subtitle tag='h6'>tag='h6'</Subtitle>
{/* use developer tools to see the final render elements */}
`;

const HeadingExample = `<Heading>Useful for <code>uppercase</code> font</Heading>`;

const SubtitleExample = ``;

const TitleDocs = (props) => (
    <Container>
        <Title>Title</Title>
        <Columns>
            <Column hasTextAlign="centered">
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
            <Column hasTextAlign="centered">
                <Title tag="h1">tag='h1'</Title>
                <Title tag="h2">tag='h2'</Title>
                <Title tag="h3">tag='h3'</Title>
                <Title tag="h4">tag='h4'</Title>
                <Title tag="h5">tag='h5'</Title>
                <Title tag="h6">tag='h6'</Title>
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
            <Column hasTextAlign="centered">
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
            <Column hasTextAlign="centered">
                <Subtitle tag="h1">tag='h1'</Subtitle>
                <Subtitle tag="h2">tag='h2'</Subtitle>
                <Subtitle tag="h3">tag='h3'</Subtitle>
                <Subtitle tag="h4">tag='h4'</Subtitle>
                <Subtitle tag="h5">tag='h5'</Subtitle>
                <Subtitle tag="h6">tag='h6'</Subtitle>
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
);

export default TitleDocs;
