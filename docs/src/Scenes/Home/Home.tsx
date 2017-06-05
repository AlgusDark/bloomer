import * as React from 'react';

import { Hero, HeroBody, Container, Title, Subtitle, Button } from './../../../../src';

const Home = () => (
    <Hero id='home' isFullHeight isColor='primary'>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Title>Bloomer</Title>
                <Subtitle>A set of <strong>React components</strong> for <strong><a href='http://bulma.io/'>Bulma</a></strong></Subtitle>
                <div className='npm'><code><span className='is-unselectable'>$ </span>npm install bloomer</code></div>
                <div id='github-btns'>
                    <iframe src="https://ghbtns.com/github-btn.html?user=AlgusDark&repo=bloomer&type=star&count=true&size=large" frameBorder='0' scrolling='0' width='160px' height='30px' />
                    <iframe src="https://ghbtns.com/github-btn.html?user=AlgusDark&repo=bloomer&type=fork&count=false&size=large" frameBorder='0' scrolling='0' width='80' height='30px' />
                </div>
                <div>
                    <Button href='#/documentation' isSize='medium' isOutlined isColor='light'>Get Started</Button>
                </div>
            </Container>
        </HeroBody>
    </Hero>
)

export default Home;