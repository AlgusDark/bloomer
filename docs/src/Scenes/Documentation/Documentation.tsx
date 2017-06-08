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
import { Elements, ElementsMenu } from './Elements/Elements';

const pages: any = [
    {
        title: 'Overview',
        to: '/overview',
        component: Overview,
        menu: OverviewMenu,
    },
    {
        title: 'Grid',
        to: '/grid',
        component: Grid,
        menu: GridMenu,
    },
    {
        title: 'Elements',
        to: '/elements',
        component: Elements,
        menu: ElementsMenu,
    },
    {
        title: 'Components',
        to: '/components',
        // component: Components,
    },
    {
        title: 'Layout',
        to: '/layout',
        // component: Layout,
    },
];

const NavBar = withRouter(({ match, location }) => {
    return (
        <Container>
            <Tabs isBoxed>
                <List>
                    {pages.map((page, i) => (
                        <Tab key={i} isActive={isActive(location, `${match.url}${page.to}`)}><Link to={`${match.url}${page.to}`}>{page.title}</Link></Tab>
                    ))}
                </List>
            </Tabs>
        </Container>
    )
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
            {pages.map((page, i) => (
                <Route path={`${match.url}${page.to}`} component={page.menu} />
            ))}
        </Container>
    </Nav>
))

const Documentation = ({ match }) => (
    <div>
        <DocHero />
        <Menu />
        <Section>
            <Switch>
                {pages.map((page, key) => (
                    <Route path={`${match.url}${page.to}`} component={page.component} />
                ))}
                <Route render={
                    props => <Container><Title hasTextAlign='centered' isSize={1}>Bloomer is production ready, but Docs are in progress.</Title></Container>
                } />
            </Switch>
        </Section>
    </div>
)

export default Documentation;