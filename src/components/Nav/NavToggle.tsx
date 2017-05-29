import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavToggle<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const NavToggle: React.SFC<NavToggle<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'nav-toggle',
        {
            'is-active': props.isActive,
        },
        props.className
    );

    const {
        isActive,
        children,
        ...HTMLProps } = props;

    return (
        <span {...HTMLProps} className={className}>
            <span />
            <span />
            <span />
        </span>
    )
}

export default withHelpersModifiers(NavToggle);