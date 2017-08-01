import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Container, Icon, Title } from './../../../../../../src';
import { isSize } from './../../Overview/Scenes/Helpers';

const IconRows: Docs.Row[] = [
    isSize,
    {
        description: <td> <code>left</code> | <code>right</code> — Should be used only when wrapped by {
          '<Control />'} that <strong>hasIcons</strong> </td>,
        prop: 'isAlign',
        type: 'string',
    },
    {
        description: <td>A valid icon from <a href="http://fontawesome.io/icons/">Font Awesome</a></td>,
        prop: 'icon',
        type: 'string',
    },
];

const IconExample = `<Icon isSize='small' icon='home' />
<Icon icon='home' />
<Icon isSize='medium' icon='home' />
<Icon isSize='large' icon='home' />
`;

const IconDocs = (props) => (
    <Container>
        <Title>Icon</Title>
        <Icon isSize="small" icon="home" />
        <Icon icon="home" />
        <Icon isSize="medium" icon="home" />
        <Icon isSize="large" icon="home" />
        <Highlight>{IconExample}</Highlight>

        <hr />
        <Title>API</Title>
        <TableDocs rows={IconRows} />
    </Container>
);

export default IconDocs;
