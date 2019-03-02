import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavbarEnd<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function NavbarEnd({tag= 'div', ...props}: NavbarEnd<HTMLElement>) {
    const className = classNames('navbar-end', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarEnd);
export default HOC;
