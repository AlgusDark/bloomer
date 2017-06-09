import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const PanelRows: Docs.Row[] = [
    isSize,
    isAlign,
];

const PageControlRows: Docs.Row[] = [
    {
        prop: 'isPrevious',
        type: 'bool'
    },
    {
        prop: 'isNext',
        type: 'bool'
    },
    {
        prop: 'isActive',
        type: 'bool'
    },
    {
        prop: 'isFocused',
        type: 'bool'
    },
    render('PageControl'),
];

const PanelBlockRows: Docs.Row[] = [
    {
        prop: 'isWrapped',
        type: 'bool'
    },
    {
        prop: 'isLabel',
        type: 'bool',
        description: <td>With this prop, you can turn your rendered element as a <code>label</code></td>,
    },
    {
        prop: 'isActive',
        type: 'bool'
    },
    render('PageLink'),
];

const PanelTabRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool'
    },
    render('PageLink'),
];

const PanelDocs = (props) => (
    <Container>
        <Title>Panel</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>PanelHeading</Title>
        <Subtitle>{noModifiers}</Subtitle>
        
        <hr/>

        <Title>PanelBlock</Title>
        <TableDocs rows={PanelBlockRows} />

        <hr/>

        <Title>PanelTabs</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>PanelTab</Title>
        <TableDocs rows={PanelTabRows} />

        <hr/>

        <Title>PanelIcon</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default PanelDocs;