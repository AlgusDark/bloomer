import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor } from './../../Overview/Scenes/Helpers';
import { Container, Title, Field, Tag, Columns, Column, Delete } from './../../../../../../src';

const TagRows: Docs.Row[] = [
    isColor,
    {
        prop: 'isSize',
        type: 'string',
        description: <td><code>medium</code> | <code>large</code></td>
    }
]

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
                <Tag isColor='black'>Black</Tag>
                <Tag isColor='light'>Light</Tag>
                <Tag isColor='success'>Success</Tag>
                <Tag isColor='danger'>Danger</Tag>
            </Column>
            <Column>
                <Highlight>{TagExample}</Highlight>
            </Column>
        </Columns>
        <Columns>
            <Column isSize={3}>
                <Tag isColor='warning' isSize='medium'>
                    Medium <Delete isSize='medium'/>
                </Tag>
                <Tag isColor='info' isSize='large'>
                    Large <Delete isSize='large'/>
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
)

export default TagDocs;