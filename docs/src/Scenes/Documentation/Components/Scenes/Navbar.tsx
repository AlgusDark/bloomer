import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

const brand = require('./../../../../../assets/logo.png');
import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container, Subtitle, Title } from './../../../../../../src';
import { Button, Control, Field, Icon, Message, MessageBody } from './../../../../../../src';
import { Navbar, NavbarBrand, NavbarBurger, NavbarDivider, NavbarDropdown, NavbarEnd, NavbarItem,
  NavbarLink, NavbarMenu, NavbarStart } from './../../../../../../src';
import { noModifiers, render } from './../../Overview/Scenes/Helpers';

const NavbarRows: Docs.Row[] = [
    {
        description: <td>This will remove any hover or active background from the navbar items.</td>,
        prop: 'isTransparent',
        type: 'bool',
    },
];

const NavbarBurgerRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const NavbarMenuRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
];

const NavbarItemRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isHoverable',
        type: 'bool',
    },
    {
        prop: 'hasDropdown',
        type: 'bool',
    },
    render('NavbarItem'),
];

const NavbarLinkRows: Docs.Row[] = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    render('NavbarLink'),
];

const NavbarDropdownRows: Docs.Row[] = [
    {
        prop: 'isBoxed',
        type: 'bool',
    },
];

const NavExample = `<Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
<NavbarBrand>
    <NavbarItem>
        <img src={brand} style={{ marginRight: 5 }} /> Bloomer
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-github' />
    </NavbarItem>
    <NavbarItem isHidden='desktop'>
        <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
    </NavbarItem>
    <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
</NavbarBrand>
<NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
    <NavbarStart>
        <NavbarItem href='#/'>Home</NavbarItem>
        <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>Documentation</NavbarLink>
            <NavbarDropdown>
                <NavbarItem href='#/'>One A</NavbarItem>
                <NavbarItem href='#/'>Two B</NavbarItem>
                <NavbarDivider />
                <NavbarItem href='#/'>Two A</NavbarItem>
            </NavbarDropdown>
        </NavbarItem>
    </NavbarStart>
    <NavbarEnd>
        <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden='touch'>
            <Icon className='fa fa-github' />
        </NavbarItem>
        <NavbarItem href="https://twitter.com/AlgusDark" isHidden='touch'>
            <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
        </NavbarItem>
        <NavbarItem>
            <Field isGrouped>
                <Control>
                    <Button id="twitter" data-social-network="Twitter" data-social-action="tweet"
                    data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer:
                    a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                        <Icon className="fa fa-twitter" />
                        <span>Tweet</span>
                    </Button>
                </Control>
            </Field>
        </NavbarItem>
    </NavbarEnd>
</NavbarMenu>
</Navbar>
`;

class NavDocs extends React.Component<{}, { isActive: boolean }> {
    state = { isActive: false };

    onClickNav = () => {
        this.setState((state) => ({ isActive: !state.isActive }));
    }

    render() {
        return (
            <Container>
                <Title>Navbar</Title>
                <Message isColor="success">
                    <MessageBody>
                        The new <code>Navbar</code> replaces the deprecated <code>Nav</code> component, whose
                        documentation you can still access temporarily <Link to={`/documentation/components/nav`}>here</Link>
                    </MessageBody>
                </Message>
                <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
                    <NavbarBrand>
                        <NavbarItem>
                            <img src={brand} style={{ marginRight: 5 }} /> Bloomer
                        </NavbarItem>
                        <NavbarItem isHidden="desktop">
                            <Icon className="fa fa-github" />
                        </NavbarItem>
                        <NavbarItem isHidden="desktop">
                            <Icon className="fa fa-twitter" style={{ color: '#55acee' }} />
                        </NavbarItem>
                        <NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav} />
                    </NavbarBrand>
                    <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <NavbarStart>
                            <NavbarItem href="#/">Home</NavbarItem>
                            <NavbarItem hasDropdown isHoverable>
                                <NavbarLink href="#/documentation">Documentation</NavbarLink>
                                <NavbarDropdown>
                                    <NavbarItem href="#/">One A</NavbarItem>
                                    <NavbarItem href="#/">Two B</NavbarItem>
                                    <NavbarDivider />
                                    <NavbarItem href="#/">Two A</NavbarItem>
                                </NavbarDropdown>
                            </NavbarItem>
                        </NavbarStart>
                        <NavbarEnd>
                            <NavbarItem href="https://github.com/AlgusDark/bloomer" isHidden="touch">
                                <Icon className="fa fa-github" />
                            </NavbarItem>
                            <NavbarItem href="https://twitter.com/AlgusDark" isHidden="touch">
                                <Icon className="fa fa-twitter" style={{ color: '#55acee' }} />
                            </NavbarItem>
                            <NavbarItem>
                                <Field isGrouped>
                                    <Control>
                                        { /*tslint:disable-next-line*/ }
                                        <Button id="twitter" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bloomer.js.org" target="_blank"
                                        href="https://twitter.com/intent/tweet?text=bloomer: a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                            <Icon className="fa fa-twitter" />
                                            <span>Tweet</span>
                                        </Button>
                                    </Control>
                                </Field>
                            </NavbarItem>
                        </NavbarEnd>
                    </NavbarMenu>
                </Navbar>
                <Highlight>{NavExample}</Highlight>

                <hr />

                <Title>Navbar</Title>
                <TableDocs rows={NavbarRows} />

                <hr />

                <Title>NavbarBrand</Title>
                <Subtitle>{noModifiers}</Subtitle>

                <hr />

                <Title>NavbarBurger</Title>
                <TableDocs rows={NavbarBurgerRows} />

                <hr />

                <Title>NavbarMenu</Title>
                <TableDocs rows={NavbarMenuRows} />

                 <hr />

                <Title>NavbarStart</Title>
                <Subtitle>{noModifiers}</Subtitle>

                 <hr />

                <Title>NavbarEnd</Title>
                <Subtitle>{noModifiers}</Subtitle>

                <hr />

                <Title>NavbarItem</Title>
                <Subtitle>
                    By default, <strong>{'<NavbarItem />'}</strong> renders a <strong>{'<div />'}</strong> element,
            but it will render an <strong>{'<a/>'}</strong> element if you provide <strong>href</strong> prop.
            <strong>E.g.</strong> <em><strong>{'<NavbarItem href="#"/>'}</strong></em>.
        </Subtitle>
                <TableDocs rows={NavbarItemRows} />

                <hr />

                <Title>NavbarLink</Title>
                <TableDocs rows={NavbarLinkRows} />

                <hr />

                <Title>NavbarDropdown</Title>
                <TableDocs rows={NavbarDropdownRows} />

                <hr />

                <Title>NavbarDivider</Title>
                <Subtitle>{noModifiers}</Subtitle>
            </Container>
        );
    }
}

export default NavDocs;
