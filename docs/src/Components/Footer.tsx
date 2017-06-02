import * as React from 'react';

import { Footer, Container, Columns, Column, Content, Icon } from './../../../src/';

const Foot = (props) => (
    <Footer>
        <Container>
            <Content>
                <Columns>
                    <Column isHalf>
                        <p>
                            Made with <Icon hasColor='danger'><i className="fa fa-heart" aria-hidden="true"></i></Icon>  by <a href="https://twitter.com/AlgusDark" target="_blank">Algus Dark</a>
                        </p>
                        <p>
                            <a href="https://twitter.com/AlgusDark" className="twitter-follow-button" data-size="large">Follow @AlgusDark</a>
                        </p>
                    </Column>
                </Columns>
            </Content>
        </Container>
    </Footer>
)

export default Foot;
