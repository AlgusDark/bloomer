import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavItem<T> extends Bulma.Render, Bulma.Active, React.HTMLProps<T> {
    isTab?: boolean,
    isBrand?: boolean,
}

export function NavItem(props: NavItem<HTMLDivElement | HTMLAnchorElement>) {
    const className = classNames(
        'nav-item',
        {
            'is-tab': props.isTab,
            'is-brand': props.isBrand,
            ...getActiveModifiers(props),
        },
        props.className
    );

    const {
        render,
        isTab,
        isBrand,
        ...rest
     } = props;

     const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    const element = props.href ? 'a' : 'div';

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(NavItem);