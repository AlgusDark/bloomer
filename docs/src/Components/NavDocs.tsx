import * as React from 'react';
import { Link } from 'react-router-dom';

import { Left, Item } from './../../../src/components/Nav';
import { isActive } from './../utils';

const NavDocs = ({ location, match, pages }) => (
    <Left>
        {pages.map((page, i) => (
            <Item key={i} isTab isActive={isActive(location, page.to)} render={
                props => <Link {...props} to={`${match.url}${page.to}`}>{page.title}</Link>
            } />
        ))}
    </Left>
)

export default NavDocs;