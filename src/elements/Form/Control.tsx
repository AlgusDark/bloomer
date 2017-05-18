import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export interface Control<T> extends React.HTMLProps<T> {
    hasIcons?: boolean,
    hasIconsLeft?: boolean,
    hasIconsRight?: boolean,
    isLoading?: boolean,
    isExpanded?: boolean,
}

export function getControlClasses(props: Control<HTMLParagraphElement>) {
    return {
        'has-icons-left has-icons-right': props.hasIcons,
        'has-icons-left': props.hasIconsLeft,
        'has-icons-right': props.hasIconsRight,
        'is-expanded': props.isExpanded,
    }
}

export const Control = (props: Control<HTMLParagraphElement>) => {
    const className = classNames(props, { control: true });
    const HTMLProps = getHTMLProps(props);

    return (
        <p {...HTMLProps} className={className}>
            {props.children}
        </p>
    )
}