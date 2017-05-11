import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const Menu = (props: React.HTMLProps<HTMLElement>) => {
    const className = classNames(props, { 'menu': true });
    const HTMLProps = getHTMLProps(props);

    return (
        <aside {...HTMLProps} className={className}>
            {props.children}
        </aside>
    )
}
