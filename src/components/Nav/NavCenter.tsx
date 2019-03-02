import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavCenter<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function NavCenter({ tag = 'div', ...props }: NavCenter<HTMLElement>) {
    const className = classNames('nav-center', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavCenter);
export default HOC;
