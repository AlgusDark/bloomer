import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface PageListProps extends Bulma.Modifiers<HTMLUListElement> {
}

export const PageList = (props: PageListProps) => {
    const className = classNames(props, {
        'pagination-list': true
    });

    const HTMLProps = getHTMLProps(props);

    return (
        <ul {...HTMLProps} className={className}>
            {props.children}
        </ul>
    )
}
