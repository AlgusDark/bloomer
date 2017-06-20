import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Level, LevelItem, LevelLeft, LevelRight } from './../../../../../../src';
import { Field, Control, Input, Button } from './../../../../../../src';

const LevelRows: Docs.Row[] = [
    {
        prop: 'isMobile',
        type: 'bool',
    }
];

const LevelItemRows: Docs.Row[] = [
    {
        prop: 'isFlexible',
        type: 'bool',
    },
    {
        prop: 'href',
        type: 'string',
        description: <td>When you provide a <code>href</code> prop, it will render <code>{'<a>'}</code> instead of <code>{'<div>'}</code></td>,
    }
];

const LevelExample = `<LevelLeft>
    <LevelItem>
        <Subtitle tag='p' isSize={5}><strong>123</strong> posts</Subtitle>
    </LevelItem>
    <LevelItem>
        <Field hasAddons>
            <Control>
                <Input placeholder='Find a post' />
            </Control>
            <Control>
                <Button>Search</Button>
            </Control>
        </Field>
    </LevelItem>
</LevelLeft>
<LevelRight>
    <LevelItem><strong>All</strong></LevelItem>
    <LevelItem><a>Published</a></LevelItem>
    <LevelItem><a>Draft</a></LevelItem>
    <LevelItem><a>Deleted</a></LevelItem>
    <LevelItem><Button isColor='success'>New</Button></LevelItem>
</LevelRight>
`;

const LevelDocs = (props) => (
    <Container>
        <Title>Level</Title>
        <Level>
            <LevelLeft>
                <LevelItem>
                    <Subtitle tag='p' isSize={5}><strong>123</strong> posts</Subtitle>
                </LevelItem>
                <LevelItem>
                    <Field hasAddons>
                        <Control>
                            <Input placeholder='Find a post' />
                        </Control>
                        <Control>
                            <Button>Search</Button>
                        </Control>
                    </Field>
                </LevelItem>
            </LevelLeft>
            <LevelRight>
                <LevelItem><strong>All</strong></LevelItem>
                <LevelItem><a>Published</a></LevelItem>
                <LevelItem><a>Draft</a></LevelItem>
                <LevelItem><a>Deleted</a></LevelItem>
                <LevelItem><Button isColor='success'>New</Button></LevelItem>
            </LevelRight>
        </Level>
        <Highlight>{LevelExample}</Highlight>
        <hr />

        <Title>Level</Title>
        <TableDocs rows={LevelRows} />

        <hr />

        <Title>LevelItem</Title>
        <Subtitle>
            By default, <strong>{'<LevelItem />'}</strong> renders a <strong>{'<div />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{"<LevelItem href='#'/>"}</strong></em>.
        </Subtitle>
        <TableDocs rows={LevelItemRows} />

        <hr />

        <Title>LevelLeft</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>LevelRight</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default LevelDocs;