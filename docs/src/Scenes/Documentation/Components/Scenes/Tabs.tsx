import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const TabsRows: Docs.Row[] = [
    isAlign,
    isSize,
    {
        prop: 'isBoxed',
        type: 'bool',
    },
    {
        prop: 'isToggle',
        type: 'bool',
    },
];

const TabListRows: Docs.Row[] = [
    {
        prop: 'isAlign',
        type: 'string',
        description: <td><code>left</code> | <code>center</code> | <code>right</code></td>,
    },
];

const TabRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const TabLinkRows: Docs.Row[] = [
    render('TabLink'),
];

const PanelDocs = (props) => (
    <Container>
        <Title>Tabs</Title>
        <TableDocs rows={TabsRows} />

        <hr/>

        <Title>TabList</Title>
        <TableDocs rows={TabListRows} />

        <hr/>

        <Title>Tab</Title>
        <TableDocs rows={TabRows} />

        <hr/>

        <Title>TabLink</Title>
        <TableDocs rows={TabLinkRows} />
    </Container>
)

export default PanelDocs;