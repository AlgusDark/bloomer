import * as React from 'react';
import { withRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import { isActive } from './../../utils';

import { Hero, Body, Footer } from './../../../../src/layout/Hero';
import { Section, Container } from './../../../../src/layout';
import { Columns, Column, Title, Subtitle } from './../../../../src';
import { Tabs, List, Tab } from './../../../../src/components/Tabs';
import { Nav, Left, Item } from './../../../../src/components/Nav';

import { Overview, OverviewMenu } from './Overview/Overview';
import { Grid, GridMenu } from './Grid/Grid';

const NavBar = withRouter(({ match, location }) => {
    const pages = [
        {
            title: 'Overview',
            to: `${match.url}/overview`,
        },
        {
            title: 'Grid',
            to: `${match.url}/grid`,
        },
        {
            title: 'Elements',
            to: `${match.url}/elements`,
        },
        {
            title: 'Components',
            to: `${match.url}/components`,
        },
        {
            title: 'Layout',
            to: `${match.url}/layout`,
        },
    ];

    return (<Container>
        <Tabs isBoxed>
            <List>
                {pages.map((page, i) => (
                    <Tab key={i} isActive={isActive(location, page.to)}><Link to={page.to}>{page.title}</Link></Tab>
                ))}
            </List>
        </Tabs>
    </Container>)
});

const DocHero = () => (
    <Hero isColor='primary'>
        <Body>
            <Container>
                <Columns isVCentered>
                    <Column>
                        <Title>Documentation</Title>
                        <Subtitle>Everything you need to start using Bloomer</Subtitle>
                    </Column>
                </Columns>
            </Container>
        </Body>
        <Footer>
            <NavBar />
        </Footer>
    </Hero>
)

const Menu = withRouter(({ match }) => (
    <Nav hasShadow>
        <Container>
            <Route exact path={match.url} render={() => <Redirect to={`${match.url}/overview/start`} />} />
            <Route path={`${match.url}/overview`} component={OverviewMenu} />
            <Route path={`${match.url}/grid`} component={GridMenu} />
        </Container>
    </Nav>
))

const Documentation = ({ match }) => (
    <div>
        <DocHero />
        <Menu />
        <Section>
            <Switch>
                <Route path={`${match.url}/overview`} component={Overview} />
                <Route path={`${match.url}/grid`} component={Grid} />
                <Route render={
                    props => <Container><Title hasTextAlign='centered' isSize={1}>Bloomer is production ready, but Docs are in progress.</Title></Container>
                } />
            </Switch>
        </Section>
    </div>
)

export default Documentation;