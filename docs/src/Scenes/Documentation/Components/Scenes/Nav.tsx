import * as React from 'react';
import * as Highlight from 'react-highlight';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container, Subtitle, Title } from './../../../../../../src';
import { Button, Control, Field, Icon } from './../../../../../../src';
import { Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle } from './../../../../../../src';
import { noModifiers, render } from './../../Overview/Scenes/Helpers';

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
        description: <td>Append <code>.nav-menu</code> for collapsable menu on mobile</td>,
        prop: 'isMenu',
        type: 'bool',
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

const NavExample = `<Nav>
    <NavLeft>
        <NavItem isBrand>Bloomer</NavItem>
    </NavLeft>
    <NavCenter>
        <NavItem>
            <Icon className="fa fa-github" />
        </NavItem>
        <NavItem>
            <Icon className="fa fa-twitter" />
        </NavItem>
    </NavCenter>
    <NavToggle />
    <NavRight isMenu>
        <NavItem>Home</NavItem>
        <NavItem>Documentation</NavItem>
        <NavItem>
            <Field isGrouped>
                <Control>
                    <Button id="twitter">
                        <Icon className="fa fa-twitter" />
                        <span>Tweet</span>
                    </Button>
                </Control>
            </Field>
        </NavItem>
    </NavRight>
</Nav>
`;

const NavDocs = (props) => (
    <Container>
        <Title>Nav</Title>
        <Nav style={{ border: 'solid 1px #00D1B2' }}>
            <NavLeft>
                <NavItem isBrand>Bloomer</NavItem>
            </NavLeft>
            <NavCenter>
                <NavItem>
                    <Icon className="fa fa-github" />
                </NavItem>
                <NavItem>
                    <Icon className="fa fa-twitter" />
                </NavItem>
            </NavCenter>
            <NavToggle />
            <NavRight isMenu>
                <NavItem>Home</NavItem>
                <NavItem>Documentation</NavItem>
                <NavItem>
                    <Field isGrouped>
                        <Control>
                            <Button id="twitter">
                                <Icon className="fa fa-twitter" />
                                <span>Tweet</span>
                            </Button>
                        </Control>
                    </Field>
                </NavItem>
            </NavRight>
        </Nav>
        <Highlight>{NavExample}</Highlight>

        <hr/>

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
            <strong>E.g.</strong> <em><strong>{'<NavItem href="#"/>'}</strong></em>.
        </Subtitle>
        <TableDocs rows={NavItemRows} />
    </Container>
);

export default NavDocs;
