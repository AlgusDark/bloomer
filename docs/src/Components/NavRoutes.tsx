import * as React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

import { Container, Title } from './../../../src';

export const NoMatch = () => (
    <div>
        <Title>Page Not Found</Title>
        Oops! Something has gone wrong and the page you were looking for could not be displayed! Try the <Link to='/documentation'>documentation home page</Link>.
    </div>
)

const NavRoutes = ({ location, match, pages }) => (
    <Container>
        <Route exact path={match.url} render={() => <Redirect to={`${match.url}${pages[0].to}`} />} />
        {pages.map((page, i) => (
            <Route key={i} path={`${match.url}${page.to}`} component={page.component} />
        ))}
        <Route component={NoMatch} />
    </Container>
)

export default NavRoutes;