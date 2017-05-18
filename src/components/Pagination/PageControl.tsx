import * as React from 'react';

import { Bulma } from './../../bulma';
import { classNames } from './../../helpers';

export interface PageControl<T> extends Bulma.Render, React.HTMLProps<T> {
    isNext?: boolean,
    isPrevious?: boolean,
    isFocused?: boolean,
    isActive?: boolean,
}

export const PageControl = (props: PageControl<HTMLAnchorElement>) => {
    const className = classNames(props, {
        'pagination-previous': !props.isNext,
        'pagination-next': !props.isPrevious,
    });

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
