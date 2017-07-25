import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavbarStart<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function NavbarStart({ tag = 'div', ...props }: NavbarStart<HTMLElement>) {
    const className = classNames('navbar-start', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarStart);
export default HOC;
