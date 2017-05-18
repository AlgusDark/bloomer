import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface Message<T> extends
    Bulma.Color, React.HTMLProps<T> { }

export const Message = (props: Message<HTMLElement>) => {
    const className = classNames(props, { message: true });
    const HTMLProps = getHTMLProps(props);

    return (
        <article {...HTMLProps} className={className}>
            {props.children}
        </article>
    )
}
