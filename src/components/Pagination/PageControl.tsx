import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getActiveModifiers, getFocusedModifiers,
    removeActiveModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface PageControl<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, Bulma.Focused, React.HTMLProps<T> {
    isPrevious?: boolean;
    isNext?: boolean;
}

export function PageControl({ tag = 'a', render, ...props }: PageControl<HTMLElement>) {
    const className = classNames(
        {
            'pagination-next': !props.isPrevious && props.isNext,
            'pagination-previous': !props.isNext,
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className,
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
