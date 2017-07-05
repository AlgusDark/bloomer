import * as React from 'react';
import * as Highlight from 'react-highlight';

import { Docs } from './../../../../utils';
import TableDocs from './../../../../Components/TableDocs';

import { isColor, isSize, noModifiers } from './../../Overview/Scenes/Helpers';
import { Container, Title, Subtitle, Icon, Field, Control, Button, } from './../../../../../../src';
import { Hero, HeroHeader, HeroBody, HeroFooter } from './../../../../../../src';
import { Nav, NavLeft, NavCenter, NavRight, NavItem, Tabs, TabList, Tab, TabLink } from './../../../../../../src';

const HeroRows: Docs.Row[] = [
    isColor,
    isSize,
    {
        prop: 'isBold',
        type: 'bool',
    },
    {
        prop: 'isFullHeight',
        type: 'bool',
    },
    {
        prop: 'isHalfHeight',
        type: 'bool',
    },
]

const HeroVideoRows: Docs.Row[] = [
    {
        prop: 'isTransparent',
        type: 'bool',
    },
]

const HeroExample = `<Hero isColor='info' isSize='medium'>
<HeroHeader>
    <Nav>
        <NavLeft>
            <NavItem isBrand>Bloomer</NavItem>
        </NavLeft>
        <NavCenter>
            <NavItem>
                <Icon>
                    <span className="fa fa-github" aria-hidden="true" />
                </Icon>
            </NavItem>
            <NavItem>
                <Icon>
                    <span className="fa fa-twitter" aria-hidden="true" />
                </Icon>
            </NavItem>
        </NavCenter>
        <NavRight isMenu>
            <NavItem>Home</NavItem>
            <NavItem>Documentation</NavItem>
        </NavRight>
    </Nav>
</HeroHeader>

<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>Title</Title>
    </Container>
</HeroBody>

<HeroFooter>
    <Tabs isBoxed isFullWidth>
        <Container>
            <TabList>
                <Tab isActive><TabLink>Overview</TabLink></Tab>
                <Tab><TabLink>Grid</TabLink></Tab>
                <Tab><TabLink>Element</TabLink></Tab>
                <Tab><TabLink>Components</TabLink></Tab>
                <Tab><TabLink>Layout</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
</HeroFooter>
</Hero>
`;

const ContainerDocs = (props) => (
    <Container>
        <Title>Hero</Title>
        <Hero isColor='info' isSize='medium'>
            <HeroHeader>
                <Nav>
                    <NavLeft>
                        <NavItem isBrand>Bloomer</NavItem>
                    </NavLeft>
                    <NavCenter>
                        <NavItem>
                            <Icon>
                                <span className="fa fa-github" aria-hidden="true" />
                            </Icon>
                        </NavItem>
                        <NavItem>
                            <Icon>
                                <span className="fa fa-twitter" aria-hidden="true" />
                            </Icon>
                        </NavItem>
                    </NavCenter>
                    <NavRight isMenu>
                        <NavItem>Home</NavItem>
                        <NavItem>Documentation</NavItem>
                    </NavRight>
                </Nav>
            </HeroHeader>

            <HeroBody>
                <Container hasTextAlign='centered'>
                    <Title>Title</Title>
                </Container>
            </HeroBody>

            <HeroFooter>
                <Tabs isBoxed isFullWidth>
                    <Container>
                        <TabList>
                            <Tab isActive><TabLink>Overview</TabLink></Tab>
                            <Tab><TabLink>Grid</TabLink></Tab>
                            <Tab><TabLink>Element</TabLink></Tab>
                            <Tab><TabLink>Components</TabLink></Tab>
                            <Tab><TabLink>Layout</TabLink></Tab>
                        </TabList>
                    </Container>
                </Tabs>
            </HeroFooter>
        </Hero>
        <Highlight>{HeroExample}</Highlight>

        <Title>Hero</Title>
        <TableDocs rows={HeroRows} />

        <hr />

        <Title>HeroHeader</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>HeroVideo</Title>
        <TableDocs rows={HeroVideoRows} />

        <hr />

        <Title>HeroBody</Title>
        <Subtitle>{noModifiers}</Subtitle>

        <hr />

        <Title>HeroFooter</Title>
        <Subtitle>{noModifiers}</Subtitle>
    </Container>
)

export default ContainerDocs;