import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const MenuLabel = (props: React.HTMLProps<HTMLParagraphElement>) => {
    const className = classNames(props, { 'menu-label': true });
    const HTMLProps = getHTMLProps(props);

    return (
        <p {...HTMLProps} className={className}>
            {props.children}
        </p>
    )
}
