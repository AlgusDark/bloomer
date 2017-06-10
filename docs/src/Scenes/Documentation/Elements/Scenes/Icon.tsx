import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isSize } from './../../Overview/Scenes/Helpers';
import { Container, Title, Icon, Columns, Column } from './../../../../../../src';

const IconRows: Docs.Row[] = [
    isSize,
    {
        prop: 'isAlign',
        type: 'string',
        description: <td> <code>left</code> | <code>right</code> — Should be used only when wrapped by {'<Control />'} that <strong>hasIcons</strong> </td>,
    }
];

const IconExample = `<Icon isSize='small'><span className='fa fa-home' /></Icon>
<Icon><span className='fa fa-home' /></Icon>
<Icon isSize='medium'><span className='fa fa-home' /></Icon>
<Icon isSize='large'><span className='fa fa-home' /></Icon>
`;

const IconDocs = (props) => (
    <Container>
        <Title>Icon</Title>
        <Icon isSize='small'><span className='fa fa-home' /></Icon>
        <Icon><span className='fa fa-home' /></Icon>
        <Icon isSize='medium'><span className='fa fa-home' /></Icon>
        <Icon isSize='large'><span className='fa fa-home' /></Icon>
        <Highlight>{IconExample}</Highlight>

        <hr />
        
        <Title>API</Title>
        <TableDocs rows={IconRows} />
    </Container>
)

export default IconDocs;