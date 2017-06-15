import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    getFocusedModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface Ellipsis<T> extends Bulma.Active, Bulma.Focused, React.HTMLProps<T> {
}

export function Ellipsis(props: Ellipsis<HTMLSpanElement>) {
    const className = classNames(
        'pagination-ellipsis',
        {
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className
    );

    const { children, ...HTMLProps } = getHTMLProps(props, removeActiveModifiers, removeFocusedModifiers);


    return (
        <span {...HTMLProps} className={className}>&hellip;</span>
    )
}

export default withHelpersModifiers(Ellipsis);