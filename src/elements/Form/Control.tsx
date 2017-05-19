import * as React from 'react';

import { classNames } from './../../helpers';

export interface Control<T> extends React.HTMLProps<T> {
    hasIcons?: boolean,
    hasIconsLeft?: boolean,
    hasIconsRight?: boolean,
    isLoading?: boolean,
    isExpanded?: boolean,
}

export const Control = (props: Control<HTMLParagraphElement>) => {
    const className = classNames(props, {
        control: true,
        'has-icons-left has-icons-right': props.hasIcons,
        'has-icons-left': props.hasIconsLeft,
        'has-icons-right': props.hasIconsRight,
        'is-expanded': props.isExpanded,
    });
    const {
        hasIcons,
        hasIconsLeft, hasIconsRight,
        isLoading, isExpanded,
        ...HTMLProps
    } = props;

    return (
        <p {...HTMLProps} className={className}>
            {props.children}
        </p>
    )
}