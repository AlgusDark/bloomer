import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';
const brand = require('./../../../../../assets/logo.png');

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Navbar, NavbarBrand, NavbarBurger, NavbarDivider, NavbarDropdown, NavbarEnd, NavbarItem, NavbarLink, NavbarMenu, NavbarStart } from './../../../../../../src';
import { Icon, Field, Control, Button, Message, MessageBody } from './../../../../../../src';

const NavRows: Docs.Row[] = [
    {
        prop: 'hasShadow',
        type: 'bool',
    },
];

const NavRightRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isMenu',
        type: 'bool',
        description: <td>Append <code>.nav-menu</code> for collapsable menu on mobile</td>,
    },
];

const NavToggleRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const NavItemRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isTab',
        type: 'bool',
    },
    {
        prop: 'isBrand',
        type: 'bool',
    },
    render('NavItem'),
];

const NavExample = ``;

const NavDocs = (props) => (
    <Container>
        <Title>Navbar</Title>
        <Message isColor='success'>
            <MessageBody>
                The new <code>Navbar</code> replaces the deprecated <code>Nav</code> component, whose documentation you can still access temporaly <Link to={`/documentation/components/nav`}>here</Link>
            </MessageBody>
        </Message>
        <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }} isTransparent>
            <NavbarBrand>
                <NavbarItem href='http://bloomer.js.org'>
                    <img src={brand} style={{ marginRight: 5 }} /> Bloomer
                    </NavbarItem>
            </NavbarBrand>
        </Navbar>
        <Highlight>{NavExample}</Highlight>

        <hr />

        <Title>Nav</Title>
        <TableDocs rows={NavRows} />

        <hr />

        <Title>NavLeft</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>NavCenter</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>NavToggle</Title>
        <TableDocs rows={NavToggleRows} />

        <hr />

        <Title>NavRight</Title>
        <TableDocs rows={NavRightRows} />

        <hr />

        <Title>NavItem</Title>
        <Subtitle>
            By default, <strong>{'<NavItem />'}</strong> renders a <strong>{'<div />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{"<NavItem href='#'/>"}</strong></em>.
        </Subtitle>
        <TableDocs rows={NavItemRows} />
    </Container>
)

export default NavDocs;