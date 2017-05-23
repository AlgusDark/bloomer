import * as React from 'react';

import { Bulma } from './../../bulma';
import { classNames } from './../../helpers';

export interface PageLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isCurrent?: boolean,
    isFocused?: boolean,
    isActive?: boolean,
}

export const PageLink: React.SFC<PageLink<HTMLAnchorElement>> = (props) => {
    const className = classNames(props, {
        'pagination-link': true,
        'is-current': props.isCurrent
    });

    const {
        render,
        isCurrent, isFocused, isActive,
        ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className}>
            {props.children}
        </a>
    )
}
