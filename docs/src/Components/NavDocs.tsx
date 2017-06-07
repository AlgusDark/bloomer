import * as React from 'react';
import { Link, RouteProps } from 'react-router-dom';

import { Left, Item } from './../../../src/components/Nav';
import { isActive } from './../utils';

const NavDocs = ({ location, pages }) => (
    <Left>
        {pages.map((page, i) => (
            <Item key={i} isTab isActive={isActive(location, page.to)} render={
                props => <Link {...props} to={page.to}>{page.title}</Link>
            } />
        ))}
    </Left>
)

export default NavDocs;