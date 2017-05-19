import * as React from 'react';

import { Bulma } from './../../bulma';
import { classNames } from './../../helpers';

export interface MenuLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isActive?: boolean,
 }

export const MenuLink = (props: MenuLink<HTMLAnchorElement>) => {
    const className = classNames(props);
    const { render, isActive, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className}>
            {props.children}
        </a>
    )
}
