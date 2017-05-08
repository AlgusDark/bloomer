import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface PaginationProps extends Bulma.Modifiers<HTMLElement> { }

export const Pagination = (props: PaginationProps) => {
    const className = classNames(props, { pagination: true });
    const htmlProps = getHTMLProps(props);

    return (
        <nav {...htmlProps} className={className}>
            {props.children}
        </nav>
    )
}
