import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Delete, Field, Tag, Title } from './../../../../../../src';
import { isColor } from './../../Overview/Scenes/Helpers';

const TagRows: Docs.Row[] = [
    isColor,
    {
        description: <td><code>medium</code> | <code>large</code></td>,
        prop: 'isSize',
        type: 'string',
    },
];

const TagExample = `<Tag isColor='black'>Black</Tag>
<Tag isColor='light'>Light</Tag>
<Tag isColor='success'>Success</Tag>
<Tag isColor='danger'>Danger</Tag>
`;

const TagExampleSize = `<Tag isColor='warning' isSize='medium'>
    Medium <Delete isSize='medium'/>
</Tag>
<Tag isColor='info' isSize='large'>
    Large <Delete isSize='large'/>
</Tag>
`;

const TagDocs = (props) => (
    <Container>
        <Title>Tag</Title>
        <Columns>
            <Column isSize={3}>
                <Tag isColor="black">Black</Tag>
                <Tag isColor="light">Light</Tag>
                <Tag isColor="success">Success</Tag>
                <Tag isColor="danger">Danger</Tag>
            </Column>
            <Column>
                <Highlight>{TagExample}</Highlight>
            </Column>
        </Columns>
        <Columns>
            <Column isSize={3}>
                <Tag isColor="warning" isSize="medium">
                    Medium <Delete isSize="medium"/>
                </Tag>
                <Tag isColor="info" isSize="large">
                    Large <Delete isSize="large"/>
                </Tag>
            </Column>
            <Column>
                <Highlight>{TagExampleSize}</Highlight>
            </Column>
        </Columns>

        <hr />

        <Title>API</Title>
        <TableDocs rows={TagRows} />
    </Container>
);

export default TagDocs;
