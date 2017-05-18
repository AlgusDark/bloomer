import * as React from 'react';

import { Bulma } from './../../bulma';
import { classNames } from './../../helpers';

export interface PageLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isCurrent?: boolean,
    isFocused?: boolean,
    isActive?: boolean,
}

export function getPageLinkClasses(props: PageLink<HTMLAnchorElement>) {
    return {
        'is-current': props.isCurrent
    }
}

export const PageLink = (props: PageLink<HTMLAnchorElement>) => {
    const className = classNames(props, { 'pagination-link': true });

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
