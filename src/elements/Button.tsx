import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getColorModifiers, getLoadingModifiers, getSizeModifiers, getStateModifiers,
    removeColorProps, removeLoadingProps, removeSizeProps, removeStateProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Button<T> extends
    Bulma.Render, Bulma.State, Bulma.Color, Bulma.Loading, Bulma.Size, Bulma.FullWidth,
    React.HTMLProps<T> {
    isLink?: boolean;
    isOutlined?: boolean;
    isInverted?: boolean;
    isStatic?: boolean;
}

export function Button(props: Button<HTMLButtonElement | HTMLAnchorElement>) {
    const className = classNames(
        'button',
        {
            'is-inverted': props.isInverted,
            'is-link': props.isLink,
            'is-outlined': props.isOutlined,
            'is-static': props.isStatic,
            ...combineModifiers(props, getStateModifiers, getColorModifiers, getLoadingModifiers, getSizeModifiers),
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
        <a {...HTMLProps} role="button" className={className} />
    );

    const button = (
        <button {...HTMLProps} type={props.type || 'button'} className={className} />
    );

    return props.href ? anchor : button;
}

const HOC = /*@__PURE__*/withHelpersModifiers(Button);
export default HOC;
