import * as React from 'react';

import { Bulma, removeAlignmentProps, removeSizeProps } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Tabs<T> extends Bulma.Alignment, Bulma.Size,
    React.HTMLProps<T> {
    isBoxed?: boolean,
    isToggle?: boolean,
}

export const Tabs: React.SFC<Tabs<HTMLDivElement>> = (props) => {
    const className = classNames(props, {
        tabs: true,
        'is-boxed': props.isBoxed,
        'is-toggle': props.isToggle,
    });
    const { isBoxed, isToggle, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}
