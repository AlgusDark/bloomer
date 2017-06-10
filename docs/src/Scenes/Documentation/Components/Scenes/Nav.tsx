import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { noModifiers, render } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle } from './../../../../../../src';
import { Nav, NavCenter, NavItem, NavLeft, NavRight, NavToggle } from './../../../../../../src';
import { Icon, Field, Control, Button, } from './../../../../../../src';

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

const NavExample = `<Nav>
    <NavLeft>
        <NavItem isBrand>Bloomer</NavItem>
    </NavLeft>
    <NavCenter>
        <NavItem>
            <Icon>
                <span className="fa fa-github" aria-hidden="true" />
            </Icon>
        </NavItem>
        <NavItem>
            <Icon>
                <span className="fa fa-twitter" aria-hidden="true" />
            </Icon>
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
                        <Icon>
                            <span className="fa fa-twitter" aria-hidden="true" />
                        </Icon>
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
                    <Icon>
                        <span className="fa fa-github" aria-hidden="true" />
                    </Icon>
                </NavItem>
                <NavItem>
                    <Icon>
                        <span className="fa fa-twitter" aria-hidden="true" />
                    </Icon>
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
                                <Icon>
                                    <span className="fa fa-twitter" aria-hidden="true" />
                                </Icon>
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
        <TableDocs rows={NavItemRows} />
    </Container>
)

export default NavDocs;