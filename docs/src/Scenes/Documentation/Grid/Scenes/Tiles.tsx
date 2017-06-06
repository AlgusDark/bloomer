import * as React from 'react';
import * as Highlight from 'react-highlight';

import { sizes } from './../Grid';
import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container } from './../../../../../../src/layout';
import { Title, Subtitle, Tag } from './../../../../../../src';

const platforms = (<td><code>mobile</code> | <code>tablet</code> | <code>desktop</code></td>)

const tilesRow: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isAncestor',
        type: 'bool',
    },
    {
        prop: 'isChild',
        type: 'bool',
    },
    {
        prop: 'isParent',
        type: 'bool',
    },
    {
        prop: 'isVertical',
        type: 'bool',
    },

]

const Columns = (props) => (
    <Container>
        <Title>Tiles</Title>
        <TableDocs rows={tilesRow} />
    </Container>
)

export default Columns;