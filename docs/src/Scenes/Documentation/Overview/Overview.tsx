import * as React from 'react';

import { Link, Redirect, Route, withRouter } from 'react-router-dom';
import { Container } from './../../../../../src/layout';
import { Left, Item } from './../../../../../src/components/Nav';

import { isActive } from './../../../utils';

import Start from './Scenes/Start';
import Helpers from './Scenes/Helpers';

export const Overview = ({ match }) => (
    <Container>
        <Route exact path={match.url} render={() => <Redirect to={`${match.url}/start`} />} />
        <Route path={`${match.url}/start`} component={Start} />
        <Route path={`${match.url}/helpers`} component={Helpers} />
    </Container>
)

export const OverviewMenu = ({ match, location }) => {
    const pages = [
        {
            title: 'Start',
            to: `${match.url}/start`,
        },
        {
            title: 'Helpers',
            to: `${match.url}/helpers`,
        },
    ];

    return (
        <Left>
            {pages.map((page, i) => (
                <Item key={i} isTab isActive={isActive(location, page.to)} render={
                    props => <Link {...props} to={page.to}>{page.title}</Link>
                } />
            ))}
        </Left>
    )
}