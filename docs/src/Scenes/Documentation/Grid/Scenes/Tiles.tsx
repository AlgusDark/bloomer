import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';


import { Container } from './../../../../../../src/layout';
import { Title, Subtitle, Tag } from './../../../../../../src';

const platforms = (<td><code>mobile</code> | <code>tablet</code> | <code>desktop</code></td>)

const sizes = (<td>
    <code>1</code> |&nbsp;
    <code>2</code> |&nbsp;
    <code>3</code> |&nbsp;
    <code>4</code> |&nbsp;
    <code>5</code> |&nbsp;
    <code>6</code> |&nbsp;
    <code>7</code> |&nbsp;
    <code>8</code> |&nbsp;
    <code>9</code> |&nbsp;
    <code>10</code> |&nbsp;
    <code>11</code> |&nbsp;
    <code>12</code>
</td>)

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