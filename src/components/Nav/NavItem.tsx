import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavItem<T> extends Bulma.Tag, Bulma.Render, Bulma.Active, React.HTMLProps<T> {
    isTab?: boolean,
    isBrand?: boolean,
}

export function NavItem({ tag = 'div', render, ...props }: NavItem<HTMLElement>) {
    const className = classNames(
        'nav-item',
        {
            'is-tab': props.isTab,
            'is-brand': props.isBrand,
            ...getActiveModifiers(props),
        },
        props.className
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
