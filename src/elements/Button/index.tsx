import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface ButtonProps extends Bulma.Modifiers<HTMLAnchorElement>, Bulma.Render<HTMLAnchorElement> { }

export const Button = (props: ButtonProps) => {
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