import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma } from './../../bulma';

export interface PageControl<T> extends Bulma.Render, React.HTMLProps<T> {
    isPrevious?: boolean,
    isNext?: boolean,
    isFocused?: boolean,
    isActive?: boolean,
}

export const PageControl: React.SFC<PageControl<HTMLAnchorElement>> = (props) => {
    const className = classNames(
        {
            'pagination-previous': !props.isNext,
            'pagination-next': !props.isPrevious && props.isNext,
            'is-focused': props.isFocused,
            'is-active': props.isActive,
        },
        props.className
    );

    const {
        render,
        isNext, isPrevious, isFocused, isActive,
        ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className}>
            {props.children}
        </a>
    )
}
