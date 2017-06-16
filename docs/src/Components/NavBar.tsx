import * as React from 'react';

import { Container, Control, Icon, Field, Button, Image } from './../../../src';
import { Nav, NavLeft as Left, NavCenter as Center, NavToggle as Toggle, NavRight as Right, NavItem as Item } from './../../../src'

const brand = require('./../../assets/logo.png');

class NavBar extends React.PureComponent<{}, { isActive: boolean }> {
    state = { isActive: false };

    onClickNav = () => {
        this.setState(state => ({ isActive: !state.isActive }));
    }

    render() {
        return (
            <Nav>
                <Container>
                    <Left>
                        <Item isBrand href='http://bloomer.js.org'>
                            <img src={brand} style={{marginRight: 5}} /> Bloomer
                        </Item>
                    </Left>
                    <Center>
                        <Item href="https://github.com/AlgusDark/bloomer">
                            <Icon>
                                <span className="fa fa-github" aria-hidden="true" />
                            </Icon>
                        </Item>
                        <Item href="https://twitter.com/AlgusDark">
                            <Icon>
                                <span className="fa fa-twitter" aria-hidden="true" />
                            </Icon>
                        </Item>
                    </Center>
                    <Toggle isActive={this.state.isActive} onClick={this.onClickNav} />
                    <Right isMenu isActive={this.state.isActive} onClick={this.onClickNav}>
                        <Item href="#/">Home</Item>
                        <Item href="#/documentation">Documentation</Item>
                        <Item>
                            <Field isGrouped>
                                <Control>
                                    <Button id="twitter" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer: a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                        <Icon>
                                            <span className="fa fa-twitter" aria-hidden="true" />
                                        </Icon>
                                        <span>Tweet</span>
                                    </Button>
                                </Control>
                            </Field>
                        </Item>
                    </Right>
                </Container>
            </Nav>
        )
    }
}

export default NavBar;