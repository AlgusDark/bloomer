import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { Container } from './../../../../../../src/layout';
import { Title, Subtitle, Tag } from './../../../../../../src';

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

const ColumnsRow: Docs.Row[] = [
    {
        prop: 'isMobile',
        type: 'bool',
    },
    {
        prop: 'isDesktop',
        type: 'bool',
    },
    {
        prop: 'isGapless',
        type: 'bool',
    },
    {
        prop: 'isGrid',
        type: 'bool',
    },
    {
        prop: 'isMultiline',
        type: 'bool',
    },
    {
        prop: 'isVCentered',
        type: 'bool',
    },
    {
        prop: 'isCentered',
        type: 'bool',
    },
]

const platforms = (<td><code>mobile</code> | <code>tablet</code> | <code>desktop</code></td>)

const ColumnRow: Docs.Row[] = [
    {
        prop: 'isSize',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isMobile',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isTablet',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isDesktop',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isFull',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isNarrow',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isThreeQuarters',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isTwoThirds',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isHalf',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOneThird',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOneQuarter',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOffset',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isOffsetMobile',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isOffsetTablet',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isOffsetDesktop',
        type: 'number',
        description: sizes,
    },
    {
        prop: 'isOffsetThreeQuarters',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOffsetTwoThirds',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOffsetHalf',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOffsetOneThird',
        type: 'bool | string | string[]',
        description: platforms,
    },
    {
        prop: 'isOffsetOneQuarter',
        type: 'bool | string | string[]',
        description: platforms,
    },

]

const ColumnsDocs = (props) => (
    <Container>
        <Title>Columns</Title>
        <TableDocs rows={ColumnsRow} />

        <hr />

        <Title>Column</Title>
        <TableDocs rows={ColumnRow} />
    </Container>
)

export default ColumnsDocs;