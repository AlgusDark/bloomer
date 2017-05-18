import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export interface Tab<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const Tab = (props: Tab<HTMLLIElement>) => {
    const className = classNames(props);
    const HTMLProps = getHTMLProps(props);

    return (
        <li {...HTMLProps} className={className}>
            {props.children}
        </li>
    )
}