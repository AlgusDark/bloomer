import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';

export interface NavbarMenu<T> extends Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
}

export function NavbarMenu({ tag = 'div', ...props }: NavbarMenu<HTMLElement>) {
    const className = classNames(
        'navbar-menu',
        {
            ...getActiveModifiers(props),
        },
        props.className,
    );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarMenu);
export default HOC;
