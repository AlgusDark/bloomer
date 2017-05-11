import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface MenuLink<T> extends Bulma.Render, React.HTMLProps<T> {
    isActive?: boolean,
 }

export const MenuLink = (props: MenuLink<HTMLAnchorElement>) => {
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
