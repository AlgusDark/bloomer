import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getColorModifiers, getSizeModifiers, getLoadingModifiers,
    removeColorProps, removeSizeProps, removeLoadingProps,
    withHelpersModifiers
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Select<T> extends Bulma.Color, Bulma.Size, Bulma.Loading,
    React.HTMLProps<T> {
}

export function Select(props: Select<HTMLSelectElement>) {
    const wrapperClassName = classNames(
        'select',
        {
            'is-disabled': props.disabled,
            ...combineModifiers(props, getColorModifiers, getSizeModifiers, getLoadingModifiers),
        },
        props.className);
    const {
        children,
        className,
        ...HTMLProps
    } = getHTMLProps(props, removeColorProps, removeSizeProps, removeLoadingProps);

    return (
        <div className={wrapperClassName}>
            <select {...HTMLProps}>{children}</select>
        </div>
    )
}

export default withHelpersModifiers(Select);