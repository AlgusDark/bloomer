import * as React from 'react';
import * as Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import { Column, Columns, Container, Content, Footer, Icon, Subtitle, Title } from './../../../../../../src';
import { noModifiers } from './../../Overview/Scenes/Helpers';

const FooterExample = `<Footer id='footer'>
    <Container>
        <Content>
            <Columns>
                <Column isFull>
                    <p>
                        Made with <Icon hasTextColor='danger'><span className="fa fa-heart" aria-hidden="true" />
                        </Icon>  by <a>Algus Dark</a>
                    </p>
                </Column>
            </Columns>
            <Content isSize='small'>
                <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
                <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
            </Content>
        </Content>
    </Container>
</Footer>`;

const FooterDocs = (props) => (
    <Container>
        <Title>Footer</Title>
        <Footer style={{marginBottom: 15}}>
            <Container>
                <Content>
                    <Columns>
                        <Column isSize="full">
                            <p>
                                Made with <Icon hasTextColor="danger"><span className="fa fa-heart"
                                 aria-hidden="true" /></Icon>  by <a>Algus Dark</a>
                            </p>
                        </Column>
                    </Columns>
                    <Content isSize="small">
                        <p>The source code is licensed under <a target="_blank">MIT</a>.</p>
                        <p>The website content is licensed under <a target="_blank">CC ANS 4.0</a>.</p>
                    </Content>
                </Content>
            </Container>
        </Footer>
        <Highlight>{FooterExample}</Highlight>
        <hr />

        <Title>API</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
);

export default FooterDocs;
