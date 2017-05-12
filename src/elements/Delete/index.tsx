import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface Delete<T> extends
    Bulma.Render, Bulma.Size, React.HTMLProps<T> {
}

export const Delete = (props: Delete<HTMLButtonElement|HTMLAnchorElement>) => {
    const className = classNames(props, { delete: true });
    const { render } = props;
    const htmlProps = getHTMLProps(props);

    if (render) return render({ ...htmlProps, className });

    const anchor = (
        <a role='button' {...htmlProps} className={className}></a>
    )

    const button = (
        <button type={props.type || 'button'} {...htmlProps} className={className}></button>
    )

    return props.href ? anchor : button;
}