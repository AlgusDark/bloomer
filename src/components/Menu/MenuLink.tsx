import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface MenuLink<T> extends Bulma.Render, Bulma.Active, React.HTMLProps<T> {
}

export const MenuLink: React.SFC<MenuLink<HTMLAnchorElement>> = (props) => {
    const className = classNames(
        {
            ...getActiveModifiers(props),
        },
        props.className
    );
    const { render, ...rest } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    const withClassName = (
        <a {...HTMLProps} className={className} />
    )

    return className ? withClassName : <a {...HTMLProps} className={className} />
}

export default withHelpersModifiers(MenuLink);
