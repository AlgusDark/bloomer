import * as React from 'react';

import { Bulma, removeAlignmentProps, removeSizeProps } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Tabs<T> extends Bulma.Alignment, Bulma.Size,
    React.HTMLProps<T> {
    isBoxed?: boolean,
    isToggle?: boolean,
}

export function getTabsClasses(props: Tabs<HTMLDivElement>) {
    return {
        'is-boxed': props.isBoxed,
        'is-toggle': props.isToggle,
    }
}

export const Tabs = (props: Tabs<HTMLDivElement>) => {
    const className = classNames(props, { tabs: true });
    const { isBoxed, isToggle, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}
