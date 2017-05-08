import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface ControlProps extends Bulma.Modifiers<HTMLParagraphElement> { }

export const Control = (props: ControlProps) => {
    const className = classNames(props, { control: true });
    const htmlProps = getHTMLProps(props);

    return (
        <p {...htmlProps} className={className}>
            {props.children}
        </p>
    )
}