import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';

import { getHTMLProps } from './../../helpers';

export interface Tab<T> extends Bulma.Active, Bulma.Tag, React.HTMLProps<T> {
}

export function Tab({ tag = 'li', ...props }: Tab<HTMLElement>) {
    const className = classNames(
        {
            ...getActiveModifiers(props),
        },
        props.className,
    ) || undefined;

    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Tab);
export default HOC;
