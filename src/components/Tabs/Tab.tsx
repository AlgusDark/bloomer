import * as React from 'react';

import { classNames } from './../../helpers';

export interface Tab<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const Tab = (props: Tab<HTMLLIElement>) => {
    const className = classNames(props);
    const { isActive, ...HTMLProps } = props;

    return (
        <li {...HTMLProps} className={className}>
            {props.children}
        </li>
    )
}