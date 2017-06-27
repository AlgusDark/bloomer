import * as React from 'react';
import { withRouter, Route, Link, Redirect, Switch } from 'react-router-dom';

import { isActive } from './../../utils';
import { NoMatch } from './../../Components/NavRoutes';

import { Hero, HeroBody as Body, HeroFooter as Footer } from './../../../../src/';
import { Section, Container } from './../../../../src';
import { Columns, Column, Title, Subtitle } from './../../../../src';
import { Tabs, TabList as List, Tab } from './../../../../src';
import { Nav, NavLeft as Left, NavItem as Item } from './../../../../src/';

import { Overview, OverviewMenu } from './Overview/Overview';
import { Grid, GridMenu } from './Grid/Grid';
import { Elements, ElementsMenu } from './Elements/Elements';
import { Components, ComponentsMenu } from './Components/Components';
import { Layout, LayoutMenu } from './Layout/Layout';

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
        component: Components,
        menu: ComponentsMenu,
    },
    {
        title: 'Layout',
        to: '/layout',
        component: Layout,
        menu: LayoutMenu,
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
            {pages.map((page, key) => (
                <Route key={key} path={`${match.url}${page.to}`} component={page.menu} />
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
                    <Route key={key} path={`${match.url}${page.to}`} component={page.component} />
                ))}
                <Route render={() => <Container children={<NoMatch/>} />} />
            </Switch>
        </Section>
    </div>
)

export default Documentation;