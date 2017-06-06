import * as React from 'react';

import { Container, Control, Icon, Field, Button } from './../../../src';
import { Nav, Left, Center, Toggle, Right, Item } from './../../../src/components/Nav'

class NavBar extends React.Component<{}, { isActive: boolean }> {
    state = { isActive: false };

    onClickNav = () => {
        this.setState(state => ({ isActive: !state.isActive }));
    }

    render() {
        return (<Container>
            <Nav>
                <Left>
                    <Item isBrand href='http://bloomer.js.org'>Bloomer</Item>
                </Left>
                <Center>
                    <Item href="https://github.com/AlgusDark/bloomer">
                        <Icon>
                            <i className="fa fa-github"></i>
                        </Icon>
                    </Item>
                    <Item href="https://twitter.com/AlgusDark">
                        <Icon>
                            <i className="fa fa-twitter"></i>
                        </Icon>
                    </Item>
                </Center>
                <Toggle isActive={this.state.isActive}  onClick={this.onClickNav} />
                <Right isMenu isActive={this.state.isActive}  onClick={this.onClickNav}>
                    <Item href="#/">Home</Item>
                    <Item href="#/documentation">Documentation</Item>
                    <Item>
                        <Field isGrouped>
                            <Control>
                                <Button id="twitter" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bloomer.js.org" target="_blank" href="https://twitter.com/intent/tweet?text=bloomer: a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark">
                                    <Icon>
                                        <i className="fa fa-twitter"></i>
                                    </Icon>
                                    <span>Tweet</span>
                                </Button>
                            </Control>
                        </Field>
                    </Item>
                </Right>
            </Nav>
        </Container>)
    }
}

export default NavBar;