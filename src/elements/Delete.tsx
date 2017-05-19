import * as React from 'react';

import { Bulma, removeSizeProps } from './../bulma';
import { classNames, getHTMLProps } from './../helpers';

export interface Delete<T> extends Bulma.Render, Bulma.Size,
    React.HTMLProps<T> { }

export const Delete = (props: Delete<HTMLButtonElement | HTMLAnchorElement>) => {
    const className = classNames(props, { delete: true });
    const { render, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeSizeProps);

    if (render) return render({ ...HTMLProps, className });

    const anchor = (
        <a role='button' {...HTMLProps} className={className}></a>
    )

    const button = (
        <button type={props.type || 'button'} {...HTMLProps} className={className}></button>
    )

    return props.href ? anchor : button;
}