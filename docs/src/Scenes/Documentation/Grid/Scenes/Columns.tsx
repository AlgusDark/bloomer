import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Column, Columns, Notification } from './../../../../../../src';
import { Container } from './../../../../../../src';
import { Subtitle, Tag, Title } from './../../../../../../src';

const sizes = (description) => (<td>
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
    <code>12</code> |
    <br />
    <br />
    <code>3/4</code> | <code>2/3</code> | <code>1/2</code> | <code>1/3</code> | <code>1/4</code> | {description}
    <br />
    <br />
    An Object with any <strong>key</strong> (<code>mobile</code> | <code>tablet</code> | <code>desktop</code> |
       <code>widescreen</code> | <code>default</code>) with any <strong>value</strong> from above.
    <br />
    <strong>E.g.</strong> <code>{'{mobile: 8, desktop:"1/2" }'}</code>
</td>);

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
];

const platforms = (<td><code>mobile</code> | <code>tablet</code> | <code>desktop</code></td>);

const ColumnRow: Docs.Row[] = [
    {
        description: sizes(<span><code>full</code> | <code>narrow</code> |</span>),
        prop: 'isSize',
        type: 'number | string | object',
    },
    {
        description: sizes(''),
        prop: 'isOffset',
        type: 'number | string | object',
    },
];

const ColumnsExample = `<Columns isCentered>
    <Column isSize='1/3'>
        <Notification isColor='success' hasTextAlign='centered'> isOneThird </Notification>
    </Column>
    <Column isSize={{mobile: 8}}>
        <Notification isColor='warning' hasTextAlign='centered'> isSize={{mobile: 8}} </Notification>
    </Column>
    <Column>
        <Notification isColor='danger' hasTextAlign='centered'> Third column </Notification>
    </Column>
    <Column>
        <Notification isColor='primary' hasTextAlign='centered'> Fourth column </Notification>
    </Column>
</Columns>
`;

const ColumnsDocs = (props) => (
    <Container>
        <Title>Columns & Column</Title>
        <Columns isCentered>
            <Column isSize="1/3">
                <Notification isColor="success" hasTextAlign="centered"> {'isSize="1/3"'} </Notification>
            </Column>
            <Column isSize={{ mobile: 8, default: 4 }}>
                <Notification isColor="warning" hasTextAlign="centered">
                    {'isSize={{ mobile: 8, default: 4 }}'}
                </Notification>
            </Column>
            <Column>
                <Notification isColor="danger" hasTextAlign="centered"> Third column </Notification>
            </Column>
            <Column>
                <Notification isColor="primary" hasTextAlign="centered"> Fourth column </Notification>
            </Column>
        </Columns>
        <Highlight className="javascript">{ColumnsExample}</Highlight>

        <hr />

        <Title>Columns</Title>
        <TableDocs rows={ColumnsRow} />

        <hr />

        <Title>Column</Title>
        <TableDocs rows={ColumnRow} />
        <Subtitle>
            When you choose the <strong>Object</strong> type, the default size for column (on all platforms) will fill
             up the remaining space automatically. If you want to change this behaviour, you should define a size with <strong>
             default</strong> key.
            <strong>E.g.</strong> <code>{'isSize={{mobile: "2", default:"4" }}'}</code> all platforms would have a default size
            of <strong>4</strong>. Meanwhile, mobile will be overwritten to size <strong>2</strong>.
        </Subtitle>
    </Container>
);

export default ColumnsDocs;
