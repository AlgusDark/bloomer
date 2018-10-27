import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface NavItem<T> extends Bulma.Tag, Bulma.Render, Bulma.Active, React.HTMLProps<T> {
    isTab?: boolean;
    isBrand?: boolean;
}

export function NavItem({ tag = 'div', render, ...props }: NavItem<HTMLElement>) {
    const className = classNames(
        'nav-item',
        {
            'is-brand': props.isBrand,
            'is-tab': props.isTab,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const {
        isTab,
        isBrand,
        ...rest
     } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavItem);
export default HOC;
