import * as React from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { NoMatch } from './../../Components/NavRoutes';
import { isActive } from './../../utils';

import { Column, Columns, Subtitle, Title } from './../../../../src';
import { Container, Section } from './../../../../src';
import { Tab, TabList as List, Tabs } from './../../../../src';
import { Hero, HeroBody as Body, HeroFooter as Footer } from './../../../../src/';
import { Nav, NavItem as Item, NavLeft as Left } from './../../../../src/';

import { Components, ComponentsMenu } from './Components/Components';
import { Elements, ElementsMenu } from './Elements/Elements';
import { Grid, GridMenu } from './Grid/Grid';
import { Layout, LayoutMenu } from './Layout/Layout';
import { Overview, OverviewMenu } from './Overview/Overview';

const pages: any = [
    {
        component: Overview,
        menu: OverviewMenu,
        title: 'Overview',
        to: '/overview',
    },
    {
        component: Grid,
        menu: GridMenu,
        title: 'Grid',
        to: '/grid',
    },
    {
        component: Elements,
        menu: ElementsMenu,
        title: 'Elements',
        to: '/elements',
    },
    {
        component: Components,
        menu: ComponentsMenu,
        title: 'Components',
        to: '/components',
    },
    {
        component: Layout,
        menu: LayoutMenu,
        title: 'Layout',
        to: '/layout',
    },
];

const NavBar = withRouter(({ match, location }) => {
    return (
        <Container>
            <Tabs isBoxed>
                <List>
                    {pages.map((page, i) => (
                        <Tab key={i} isActive={isActive(location, `${match.url}${page.to}`)}>
                            <Link to={`${match.url}${page.to}`}>{page.title}</Link>
                        </Tab>
                    ))}
                </List>
            </Tabs>
        </Container>
    );
});

const DocHero = () => (
    <Hero isColor="primary">
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
);

const Menu = withRouter(({ match }) => (
    <Nav hasShadow>
        <Container>
            <Route exact path={match.url} render={() => <Redirect to={`${match.url}/overview/start`} />} />
            {pages.map((page, key) => (
                <Route key={key} path={`${match.url}${page.to}`} component={page.menu} />
            ))}
        </Container>
    </Nav>
));

const Documentation = (props) => (
    <div>
        <DocHero />
        <Menu />
        <Section>
            <Switch>
                {pages.map((page, key) => (
                    <Route key={key} path={`${props.match.url}${page.to}`} component={page.component} />
                ))}
                <Route render={() => <Container children={<NoMatch />} />} />
            </Switch>
        </Section>
    </div>
);

export default Documentation;
