import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma } from './../../bulma';

export interface MenuLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isActive?: boolean,
}

export const MenuLink: React.SFC<MenuLink<HTMLAnchorElement>> = (props) => {
    const className = classNames(
        {
            'is-active': props.isActive,
        },
        props.className
    );
    const { render, isActive, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    const withClassName = (
        <a {...HTMLProps} className={className}>
            {props.children}
        </a>
    )

    return className ? withClassName : <a {...HTMLProps} className={className}>{props.children}</a>
}
