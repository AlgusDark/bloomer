import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const MenuList = (props: React.HTMLProps<HTMLUListElement>) => {
    const className = classNames(props, { 'menu-list': true });
    const HTMLProps = getHTMLProps(props);

    return (
        <ul {...HTMLProps} className={className}>
            {props.children}
        </ul>
    )
}
