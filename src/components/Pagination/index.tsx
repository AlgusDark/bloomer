import * as React from 'react';
import { Bulma } from './../../bulma';


import { classNames, getHTMLProps } from './../../helpers';

export interface Pagination<T> extends
    Bulma.Alignment, Bulma.Size, React.HTMLProps<T> { }

export const Pagination = (props: Pagination<HTMLElement>) => {
    const className = classNames(props, { pagination: true });
    const htmlProps = getHTMLProps(props);

    return (
        <nav {...htmlProps} className={className}>
            {props.children}
        </nav>
    )
}
