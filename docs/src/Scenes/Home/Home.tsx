import * as React from 'react';

import { Hero, HeroBody, Container, Title, SubTitle, Button } from './../../../../src';

const Home = () => (
    <Hero id='home' isFullHeight isPrimary>
        <HeroBody>
            <Container hasText='centered'>
                <Title>Bloomer</Title>
                <SubTitle>A set of <strong>React components</strong> for <strong><a href='http://bulma.io/'>Bulma</a></strong></SubTitle>
                <div className='npm'><code><span className='is-unselectable'>$ </span>npm install bloomer</code></div>
                <div id='github-btns'>
                    <iframe src="https://ghbtns.com/github-btn.html?user=AlgusDark&repo=bloomer&type=star&count=true&size=large" frameBorder='0' scrolling='0' width='160px' height='30px' />
                    <iframe src="https://ghbtns.com/github-btn.html?user=AlgusDark&repo=bloomer&type=fork&count=false&size=large" frameBorder='0' scrolling='0' width='80' height='30px' />
                </div>
                <div>
                    <Button href='#/documentation' isMedium isOutlined isLight>Get Started</Button>
                </div>
            </Container>
        </HeroBody>
    </Hero>
)

export default Home;