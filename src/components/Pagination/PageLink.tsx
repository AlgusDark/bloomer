import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    getFocusedModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface PageLink<T> extends Bulma.Render, Bulma.Active, Bulma.Focused,
    React.HTMLProps<T> {
    isCurrent?: boolean,
}

export function PageLink(props: PageLink<HTMLAnchorElement>) {
    const className = classNames(
        'pagination-link',
        {
            'is-current': props.isCurrent,
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className
    );

    const {
        render,
        isCurrent,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers, removeFocusedModifiers);

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(PageLink);