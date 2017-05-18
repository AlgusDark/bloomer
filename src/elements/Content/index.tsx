import * as React from 'react';

import { Bulma, removeSizeProps } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Content<T> extends Bulma.Size, React.HTMLProps<HTMLDivElement> { }

export const Content = (props: Content<HTMLDivElement>) => {
    const className = classNames(props, { content: true });
    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}