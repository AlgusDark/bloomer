import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    getFocusedModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface PageControl<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, Bulma.Focused, React.HTMLProps<T> {
    isPrevious?: boolean,
    isNext?: boolean,
}

export function PageControl({ tag = 'a', render, ...props }: PageControl<HTMLElement>) {
    const className = classNames(
        {
            'pagination-previous': !props.isNext,
            'pagination-next': !props.isPrevious && props.isNext,
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className
    );

    const {
        isNext,
        isPrevious,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers, removeFocusedModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PageControl);
export default HOC;