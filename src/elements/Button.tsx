import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    removeStateProps, removeColorProps, removeLoadingProps, removeSizeProps,
    getStateModifiers, getColorModifiers, getLoadingModifiers, getSizeModifiers,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Button<T> extends
    Bulma.Render, Bulma.State, Bulma.Color, Bulma.Loading, Bulma.Size,
    React.HTMLProps<T> {
    isLink?: boolean,
    isOutlined?: boolean,
    isInverted?: boolean,
    isStatic?: boolean,
}

export function Button(props: Button<HTMLButtonElement | HTMLAnchorElement>) {
    const className = classNames(
        'button',
        {
            'is-link': props.isLink,
            'is-outlined': props.isOutlined,
            'is-inverted': props.isInverted,
            'is-static': props.isStatic,
            ...combineModifiers(props, getStateModifiers, getColorModifiers, getLoadingModifiers, getSizeModifiers)
        },
        props.className,
    );
    const { render, isLink, isOutlined, isInverted, isStatic, ...rest } = props;
    const HTMLProps = getHTMLProps(
        rest,
        removeStateProps,
        removeColorProps,
        removeLoadingProps,
        removeSizeProps,
    );

    if (render) return render({ ...HTMLProps, className });

    const anchor = (
        <a {...HTMLProps} role='button' className={className} />
    )

    const button = (
        <button {...HTMLProps} type={props.type || 'button'} className={className} />
    )

    return props.href ? anchor : button;
}

export default withHelpersModifiers(Button);