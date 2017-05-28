import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Ellipsis<T> extends React.HTMLProps<T> {
    isFocused?: boolean,
    isActive?: boolean,
}

export const Ellipsis: React.SFC<Ellipsis<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'pagination-ellipsis',
        {
            'is-focused': props.isFocused,
            'is-active': props.isActive,
        },
        props.className
    );

    const {
        isFocused,
        isActive,
        children,
        ...HTMLProps
    } = props;

    return (
        <span {...HTMLProps} className={className}>&hellip;</span>
    )
}

export default withHelpersModifiers(Ellipsis);