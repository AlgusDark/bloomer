import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface Tab<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const Tab = (props: Tab<HTMLLIElement>) => {
    const className = classNames(props);
    const htmlProps = getHTMLProps(props);

    return (
        <li {...htmlProps} className={className}>
            {props.children}
        </li>
    )
}