import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface TabLink<T> extends Bulma.Render, React.HTMLProps<T> { }

export const TabLink = (props: TabLink<HTMLAnchorElement>) => {
    const className = classNames(props);
    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    return (
        <a {...htmlProps} className={className}>
            {props.children}
        </a>
    )
}
