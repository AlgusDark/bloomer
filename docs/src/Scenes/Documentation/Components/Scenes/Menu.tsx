import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';

const MenuLinkRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    render('MenuLink'),
];

const MenuDocs = (props) => (
    <Container>
        <Title>Menu</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr/>

        <Title>MenuLabel</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MenuList</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>MenuLink</Title>
        <TableDocs rows={MenuLinkRows} />
    </Container>
)

export default MenuDocs;