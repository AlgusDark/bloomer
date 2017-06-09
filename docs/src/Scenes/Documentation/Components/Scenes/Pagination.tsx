import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const PaginationRows: Docs.Row[] = [
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

const PageLinkRows: Docs.Row[] = [
    {
        prop: 'isCurrent',
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
    render('PageLink'),
];

const PaginationDocs = (props) => (
    <Container>
        <Title>Pagination</Title>
        <TableDocs rows={PaginationRows} />

        <hr/>

        <Title>PageControl</Title>
        <TableDocs rows={PageControlRows} />

        <hr/>

        <Title>PageList</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>Page</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>PageLink</Title>
        <TableDocs rows={PageLinkRows} />

        <hr/>

        <Title>Ellipsis</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default PaginationDocs;