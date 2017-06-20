import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    getFocusedModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface PageLink<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, Bulma.Focused,
    React.HTMLProps<T> {
    isCurrent?: boolean,
}

export function PageLink({ tag = 'a', render, ...props }: PageLink<HTMLElement>) {
    const className = classNames(
        'pagination-link',
        {
            'is-current': props.isCurrent,
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className
    );

    const {
        isCurrent,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers, removeFocusedModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PageLink);
export default HOC;
