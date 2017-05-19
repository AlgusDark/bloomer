import * as React from 'react';

import { Bulma, removeAlignmentProps, removeSizeProps } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Pagination<T> extends Bulma.Alignment, Bulma.Size,
    React.HTMLProps<T> { }

export const Pagination = (props: Pagination<HTMLElement>) => {
    const className = classNames(props, { pagination: true });
    const HTMLProps = getHTMLProps(
        props,
        removeAlignmentProps,
        removeSizeProps
    );

    return (
        <nav {...HTMLProps} className={className}>
            {props.children}
        </nav>
    )
}
