import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavItem<T> extends Bulma.Render, React.HTMLProps<T> {
    isActive?: boolean,
    isTab?: boolean,
    isBrand?: boolean,
}

export const NavItem: React.SFC<NavItem<HTMLDivElement | HTMLAnchorElement>> = (props) => {
    const className = classNames(
        'nav-item',
        {
            'is-active': props.isActive,
            'is-tab': props.isTab,
            'is-brand': props.isBrand,
        },
        props.className
    );

    const {
        render,
        isActive,
        isTab,
        isBrand,
        ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    const element = props.href ? 'a' : 'div';

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(NavItem);