import * as React from 'react';

import { Hero, HeroBody, Container, Title, Subtitle, Button, Image } from './../../../../src';

const logo = require('./../../../assets/logo.png');

const Home = () => (
    <Hero id='home' isFullHeight isColor='primary'>
        <HeroBody>
            <Container hasTextAlign='centered'>
                <Image id='logo' isSize='128x128' src={logo} />
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
                <div>
                    <img src="https://camo.githubusercontent.com/33d7b60d09dc9b7a79c969b225755a177b27ed80/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f626c6f6f6d65722e7376673f7374796c653d666c61742d737175617265" alt="NPM Version" data-canonical-src="https://img.shields.io/npm/v/bloomer.svg?style=flat-square" style={{ maxWidth: '100%' }} />
                </div>
            </Container>
        </HeroBody>
    </Hero>
)

export default Home;