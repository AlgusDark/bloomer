import * as React from 'react';
import { Link } from 'react-router-dom';

import { NavLeft as Left, NavItem as Item} from './../../../src';
import { isActive } from './../utils';

const NavDocs = ({ location, match, pages }) => (
    <Left>
        {pages.map((page, i) => (
            !page.deprecated ? <Item key={i} isTab isActive={isActive(location, page.to)} render={
                props => <Link {...props} to={`${match.url}${page.to}`}>{page.title}</Link>
            } /> : ''
        ))}
    </Left>
)

export default NavDocs;