import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavToggle<T> extends Bulma.Active, Bulma.Tag, React.HTMLProps<T> {
}

export function NavToggle({ tag = 'span', ...props }: NavToggle<HTMLElement>) {
    const className = classNames(
        'nav-toggle',
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

const HOC = /*@__PURE__*/withHelpersModifiers(NavToggle);
export default HOC;