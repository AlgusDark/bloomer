import * as React from 'react';

import { Link, Redirect, Route, withRouter } from 'react-router-dom';
import { Container } from './../../../../../src/layout';
import { Left, Item } from './../../../../../src/components/Nav';

import { isActive } from './../../../utils';

import Columns from './Scenes/Columns';
import Tiles from './Scenes/Tiles';

export const sizes = (<td>
    <code>1</code> |&nbsp;
    <code>2</code> |&nbsp;
    <code>3</code> |&nbsp;
    <code>4</code> |&nbsp;
    <code>5</code> |&nbsp;
    <code>6</code> |&nbsp;
    <code>7</code> |&nbsp;
    <code>8</code> |&nbsp;
    <code>9</code> |&nbsp;
    <code>10</code> |&nbsp;
    <code>11</code> |&nbsp;
    <code>12</code>
</td>)

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
        <Left>
            {pages.map((page, i) => (
                <Item key={i} isTab isActive={isActive(location, page.to)} render={
                    props => <Link {...props} to={page.to}>{page.title}</Link>
                } />
            ))}
        </Left>
    )
}