import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    getFocusedModifiers, removeFocusedModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface PageControl<T> extends Bulma.Render, Bulma.Active, Bulma.Focused, React.HTMLProps<T> {
    isPrevious?: boolean,
    isNext?: boolean,
}

export function PageControl(props: PageControl<HTMLAnchorElement>) {
    const className = classNames(
        {
            'pagination-previous': !props.isNext,
            'pagination-next': !props.isPrevious && props.isNext,
            ...combineModifiers(props, getActiveModifiers, getFocusedModifiers),
        },
        props.className
    );

    const {
        render,
        isNext, isPrevious,
        ...rest
    } = props;
    
    const HTMLProps = getHTMLProps(rest, removeActiveModifiers, removeFocusedModifiers);

    if (render) return render({ ...HTMLProps, className });

    return (
        <a {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(PageControl);