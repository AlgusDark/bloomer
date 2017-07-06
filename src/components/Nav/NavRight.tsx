import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavRight<T> extends Bulma.Active, Bulma.Tag, React.HTMLProps<T> {
    isMenu?: boolean,
}

export function NavRight({ tag = 'div', ...props }: NavRight<HTMLElement>) {
    const className = classNames(
        'nav-right',
        {
            'nav-menu': props.isMenu,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const { isMenu, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavRight);
export default HOC;
