import * as React from 'react';

import { Link, Redirect, Route, withRouter } from 'react-router-dom';
import { Container } from './../../../../../src/layout';
import { Left, Item } from './../../../../../src/components/Nav';

import NavDocs from './../../../Components/NavDocs';
import Columns from './Scenes/Columns';
import Tiles from './Scenes/Tiles';

export const Grid = ({ match }) => (
    <Container>
        <Route exact path={match.url} render={() => <Redirect to={`${match.url}/columns`} />} />
        <Route path={`${match.url}/columns`} component={Columns} />
        <Route path={`${match.url}/tiles`} component={Tiles} />
    </Container>
)

export const GridMenu = ({ match, location }) => {
    const pages = [
        {
            title: 'Columns',
            to: `${match.url}/columns`,
        },
        {
            title: 'Tiles',
            to: `${match.url}/tiles`,
        },
    ];

    return (
        <NavDocs location={location} pages={pages} />
    )
}