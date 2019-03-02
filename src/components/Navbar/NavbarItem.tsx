import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface NavbarItem<T> extends Bulma.Tag, Bulma.Render, Bulma.Active, React.HTMLProps<T> {
    isHoverable?: boolean;
    hasDropdown?: boolean;
}

export function NavbarItem({ tag = 'div', render, isHoverable, hasDropdown, ...props }: NavbarItem<HTMLElement>) {
    const className = classNames(
        'navbar-item',
        {
            'has-dropdown': hasDropdown,
            'is-hoverable': isHoverable,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarItem);
export default HOC;
