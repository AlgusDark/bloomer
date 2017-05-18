import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface TabLink<T> extends Bulma.Render, React.HTMLProps<T> { }

export const TabLink = (props: TabLink<HTMLAnchorElement>) => {
    const className = classNames(props);
    const { render } = props;
    const HTMLProps = getHTMLProps(props);

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className}>
            {props.children}
        </a>
    )
}
