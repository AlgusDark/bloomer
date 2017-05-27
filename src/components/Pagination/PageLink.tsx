import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PageLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isCurrent?: boolean,
    isFocused?: boolean,
    isActive?: boolean,
}

export const PageLink: React.SFC<PageLink<HTMLAnchorElement>> = (props) => {
    const className = classNames(
        'pagination-link',
        {
            'is-current': props.isCurrent,
            'is-focused': props.isFocused,
            'is-active': props.isActive
        },
        props.className
    );

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

export default withHelpersModifiers(PageLink);