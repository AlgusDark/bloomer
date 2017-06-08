import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {Container} from './../../../src/layout/Container';

const NavRoutes = ({ location, match, pages }) => (
    <Container>
        <Route exact path={match.url} render={() => <Redirect to={`${match.url}${pages[0].to}`} />} />
        {pages.map( (page, i) => (
            <Route key={i} path={`${match.url}${page.to}`} component={page.component} />
        ) )}
    </Container>
)

export default NavRoutes;