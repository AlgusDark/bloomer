import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Control<T> extends React.HTMLProps<T> {
    hasIcons?: boolean,
    hasIconsLeft?: boolean,
    hasIconsRight?: boolean,
    isExpanded?: boolean,
    isLoading?: boolean,
}

export const Control: React.SFC<Control<HTMLDivElement>> = (props) => {
    const className = classNames(
        'control',
        {
            'has-icons-left has-icons-right': props.hasIcons,
            'has-icons-left': props.hasIconsLeft,
            'has-icons-right': props.hasIconsRight,
            'is-expanded': props.isExpanded,
            'is-loading': props.isLoading,
        },
        props.className);
    const {
        hasIcons,
        hasIconsLeft, hasIconsRight,
        isExpanded, isLoading,
        ...HTMLProps
    } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Control);