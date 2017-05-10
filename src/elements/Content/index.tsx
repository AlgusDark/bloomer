import * as React from 'react';
import { Bulma } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Content<T> extends Bulma.Size, React.HTMLProps<HTMLDivElement> { }

export const Content = (props: Content<HTMLDivElement>) => {
    const className = classNames(props, { content: true });
    const htmlProps = getHTMLProps(props);

    return (
        <div {...htmlProps} className={className}>
            {props.children}
        </div>
    )
}