import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, isSize, isAlign } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Icon } from './../../../../../../src';
import { Breadcrumb, BreadcrumbItem } from './../../../../../../src';

const BreadcrumbRows: Docs.Row[] = [
    {
        prop: 'isAlign',
        type: 'string',
        description: <td><code>centered</code> | <code>right</code></td>,
    },
    isSize,
    {
        prop: 'hasSeparator',
        type: 'string',
        description: <td><code>arrow</code> | <code>bullet</code> | <code>dot</code> | <code>succeeds</code></td>
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
)

export default PanelDocs;