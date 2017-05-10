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

export function getButtonClasses(props: Button<HTMLAnchorElement>) {
    return {
        'is-link': props.isLink,
        'is-outlined': props.isOutlined,
        'is-inverted': props.isInverted,
    }
}

export const Button = (props: Button<HTMLAnchorElement>) => {
    const className = classNames(props, { button: true });
    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    return (
        <a {...htmlProps} className={className}>
            {props.children}
        </a>
    )
}