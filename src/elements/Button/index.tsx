import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface Button<T> extends
    Bulma.Render, Bulma.State, Bulma.Color, Bulma.FullWidth,
    React.HTMLProps<T> {
    isLink?: boolean,
    isOutlined?: boolean,
    isInverted?: boolean,
}

export function getButtonClasses(props: Button<HTMLButtonElement|HTMLAnchorElement>) {
    return {
        'is-link': props.isLink,
        'is-outlined': props.isOutlined,
        'is-inverted': props.isInverted,
    }
}

export const Button = (props: Button<HTMLButtonElement|HTMLAnchorElement>) => {
    const className = classNames(props, { button: true });
    const { render } = props;
    const HTMLProps = getHTMLProps(props);

    if (render) return render({ ...HTMLProps, className });

    const anchor = (
        <a {...HTMLProps} role='button' className={className}>
            {props.children}
        </a>
    )

    const button = (
        <button {...HTMLProps} type={props.type || 'button'} className={className}>
            {props.children}
        </button>
    )

    return props.href ? anchor : button;
}