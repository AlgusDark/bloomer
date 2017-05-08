import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface TabLinkProps extends Bulma.Modifiers<HTMLAnchorElement>, Bulma.Render<HTMLAnchorElement> { }

export const TabLink = (props: TabLinkProps) => {
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
