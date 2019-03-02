import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Navbar<T> extends Bulma.Tag, React.HTMLProps<T> {
    isTransparent?: boolean;
}

export function Navbar({tag= 'nav', isTransparent, ...props}: Navbar<HTMLElement>) {
    const className = classNames(
        'navbar',
        {
            'is-transparent': isTransparent,
        },
        props.className,
    );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Navbar);
export default HOC;
