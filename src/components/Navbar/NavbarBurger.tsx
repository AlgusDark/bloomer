import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavbarBurger<T> extends Bulma.Active, Bulma.Tag, React.HTMLProps<T> {
}

export function NavbarBurger({ tag = 'span', ...props }: NavbarBurger<HTMLElement>) {
    const className = classNames(
        'navbar-burger',
        {
            ...getActiveModifiers(props),
        },
        props.className
    );

    const { children, ...HTMLProps } = getHTMLProps(props, removeActiveModifiers);

    return React.createElement(
        tag, { ...HTMLProps, className },
        React.createElement('span', null),
        React.createElement('span', null),
        React.createElement('span', null)
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarBurger);
export default HOC;