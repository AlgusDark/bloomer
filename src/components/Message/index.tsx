import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface Message<T> extends
    Bulma.Color, React.HTMLProps<T> { }

export const Message = (props: Message<HTMLElement>) => {
    const className = classNames(props, { message: true });
    const htmlProps = getHTMLProps(props);

    return (
        <article {...htmlProps} className={className}>
            {props.children}
        </article>
    )
}
