import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Tab<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const Tab: React.SFC<Tab<HTMLLIElement>> = (props) => {
    const className = classNames(
        {
            'is-active': props.isActive
        },
        props.className
    );
    const { isActive, ...HTMLProps } = props;

    const withClassName = (
        <li {...HTMLProps} className={className}>
            {props.children}
        </li>
    )

    return className ? withClassName : <li {...HTMLProps}>{props.children}</li>
}

export default withHelpersModifiers(Tab);