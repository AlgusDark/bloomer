import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavRight<T> extends React.HTMLProps<T> {
    isActive?: boolean,
    isMenu?: boolean,
}

export const NavRight: React.SFC<NavRight<HTMLDivElement>> = (props) => {
    const className = classNames(
        'nav-right',
        {
            'is-active': props.isActive,
            'nav-menu': props.isMenu,
        },
        props.className,
    );

    const { isActive, isMenu, ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(NavRight);