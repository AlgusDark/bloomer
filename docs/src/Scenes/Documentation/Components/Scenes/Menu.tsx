import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Menu, MenuLabel, MenuList, MenuLink, } from './../../../../../../src';
import { Columns, Column, } from './../../../../../../src';

const MenuLinkRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    render('MenuLink'),
];

const MenuExample = `<Menu>
    <MenuLabel>General</MenuLabel>
    <MenuList>
        <li><MenuLink>Dashboard</MenuLink></li>
        <li><MenuLink>Customers</MenuLink></li>
    </MenuList>
    <MenuLabel>Administration</MenuLabel>
    <MenuList>
        <li><MenuLink>Team Settings</MenuLink></li>
        <li><MenuLink isActive>Manage Your Team</MenuLink></li>
        <MenuList>
            <li><MenuLink>Members</MenuLink></li>
            <li><MenuLink>Plugins</MenuLink></li>
            <li><MenuLink>Add a Member</MenuLink></li>
        </MenuList>
        <li><MenuLink>Invitations</MenuLink></li>
        <li><MenuLink>Authentication</MenuLink></li>
    </MenuList>
    <MenuLabel>Transactions</MenuLabel>
    <MenuList>
        <li><MenuLink>Payments</MenuLink></li>
        <li><MenuLink>Transfers</MenuLink></li>
        <li><MenuLink>Balance</MenuLink></li>
    </MenuList>
</Menu>
`;

const MenuDocs = (props) => (
    <Container>
        <Title>Menu</Title>
        <Columns>
            <Column isSize={4}>
                <Menu style={{ marginBottom: 15 }}>
                    <MenuLabel>General</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Dashboard</MenuLink></li>
                        <li><MenuLink>Customers</MenuLink></li>
                    </MenuList>
                    <MenuLabel>Administration</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Team Settings</MenuLink></li>
                        <li><MenuLink isActive>Manage Your Team</MenuLink></li>
                        <MenuList>
                            <li><MenuLink>Members</MenuLink></li>
                            <li><MenuLink>Plugins</MenuLink></li>
                            <li><MenuLink>Add a Member</MenuLink></li>
                        </MenuList>
                        <li><MenuLink>Invitations</MenuLink></li>
                        <li><MenuLink>Authentication</MenuLink></li>
                    </MenuList>
                    <MenuLabel>Transactions</MenuLabel>
                    <MenuList>
                        <li><MenuLink>Payments</MenuLink></li>
                        <li><MenuLink>Transfers</MenuLink></li>
                        <li><MenuLink>Balance</MenuLink></li>
                    </MenuList>
                </Menu>
            </Column>
            <Column><Highlight>{MenuExample}</Highlight></Column>
        </Columns>
        <hr />

        <Title>Menu</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

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