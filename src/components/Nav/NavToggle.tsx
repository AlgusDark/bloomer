import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavToggle<T> extends Bulma.Active, React.HTMLProps<T> {
}

export function NavToggle(props: NavToggle<HTMLSpanElement>) {
    const className = classNames(
        'nav-toggle',
        {
            ...getActiveModifiers(props),
        },
        props.className
    );

    const {children, ...HTMLProps} = getHTMLProps(props, removeActiveModifiers);

    return (
        <span {...HTMLProps} className={className}>
            <span />
            <span />
            <span />
        </span>
    )
}

export default withHelpersModifiers(NavToggle);