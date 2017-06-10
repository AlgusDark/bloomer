import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Pagination, Page, PageControl, PageEllipsis, PageLink, PageList } from './../../../../../../src';

const PaginationRows: Docs.Row[] = [
    isSize,
    isAlign,
];

const PageControlRows: Docs.Row[] = [
    {
        prop: 'isPrevious',
        type: 'bool',
        description: <td>This is the default prop if you don't provide <code>isPrevious</code> or <code>isNext</code></td>,
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

const PaginationExample = `<Pagination>
    <PageControl>Previous</PageControl>
    <PageControl isNext>Next</PageControl>
    <PageList>
        <Page><PageLink>1</PageLink></Page>
        <Page><PageEllipsis /></Page>
        <Page><PageLink>45</PageLink></Page>                
        <Page><PageLink isCurrent>46</PageLink></Page>                
        <Page><PageLink >47</PageLink></Page>                
        <Page><PageEllipsis /></Page>
        <Page><PageLink >86</PageLink></Page>                                
    </PageList>
</Pagination>
`;

const PaginationDocs = (props) => (
    <Container>
        <Title>Pagination</Title>
        <Pagination style={{marginBottom: 15}}>
            <PageControl>Previous</PageControl>
            <PageControl isNext>Next</PageControl>
            <PageList>
                <Page><PageLink>1</PageLink></Page>
                <Page><PageEllipsis /></Page>
                <Page><PageLink>45</PageLink></Page>                
                <Page><PageLink isCurrent>46</PageLink></Page>                
                <Page><PageLink >47</PageLink></Page>                
                <Page><PageEllipsis /></Page>
                <Page><PageLink >86</PageLink></Page>                                
            </PageList>
        </Pagination>
        <Highlight>{PaginationExample}</Highlight>

        <hr/>

        <Title>Pagination</Title>
        <TableDocs rows={PaginationRows} />

        <hr />

        <Title>PageControl</Title>
        <TableDocs rows={PageControlRows} />

        <hr />

        <Title>PageList</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>Page</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>PageLink</Title>
        <TableDocs rows={PageLinkRows} />

        <hr />

        <Title>Ellipsis</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default PaginationDocs;