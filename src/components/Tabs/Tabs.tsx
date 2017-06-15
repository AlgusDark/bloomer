import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    removeAlignmentProps, removeSizeProps,
    getAlignmentModifiers, getSizeModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Tabs<T> extends Bulma.Alignment, Bulma.Size,
    React.HTMLProps<T> {
    isAlign?: 'left' | 'centered' | 'right',
    isBoxed?: boolean,
    isToggle?: boolean,
}

export function Tabs(props: Tabs<HTMLDivElement>) {
    const className = classNames(
        'tabs',
        {
            'is-boxed': props.isBoxed,
            'is-toggle': props.isToggle,
            ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers),
        },
        props.className,
    );
    const { isBoxed, isToggle, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Tabs);