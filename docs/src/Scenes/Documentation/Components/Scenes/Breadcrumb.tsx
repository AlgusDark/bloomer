import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Breadcrumb, BreadcrumbItem } from './../../../../../../src';
import { Container, Icon, Subtitle, Title } from './../../../../../../src';
import { isAlign, isSize, noModifiers } from './../../Overview/Scenes/Helpers';

const BreadcrumbRows: Docs.Row[] = [
    {
        description: <td><code>centered</code> | <code>right</code></td>,
        prop: 'isAlign',
        type: 'string',
    },
    isSize,
    {
        description: <td><code>arrow</code> | <code>bullet</code> | <code>dot</code> | <code>succeeds</code></td>,
        prop: 'hasSeparator',
        type: 'string',
    },
];

const BreadcrumbItemRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const BreadcrumbExample = `<Breadcrumb>
    <ul>
        <BreadcrumbItem><a>Bloomer</a></BreadcrumbItem>
        <BreadcrumbItem><a>Components</a></BreadcrumbItem>
        <BreadcrumbItem isActive><a>Breadcrumb</a></BreadcrumbItem>
    </ul>
</Breadcrumb>`;

const PanelDocs = (props) => (
    <Container>
        <Title>BreadCrumb</Title>
        <Breadcrumb>
            <ul>
                <BreadcrumbItem><a>Bloomer</a></BreadcrumbItem>
                <BreadcrumbItem><a>Components</a></BreadcrumbItem>
                <BreadcrumbItem isActive><a>Breadcrumb</a></BreadcrumbItem>
            </ul>
        </Breadcrumb>
        <Highlight>{BreadcrumbExample}</Highlight>
        <hr />

        <Title>BreadCrumb</Title>
        <TableDocs rows={BreadcrumbRows} />

        <hr />

        <Title>BreadcrumbItem</Title>
        <TableDocs rows={BreadcrumbItemRows} />
    </Container>
);

export default PanelDocs;
