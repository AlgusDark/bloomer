import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getColorModifiers, getSizeModifiers,
    removeColorProps, removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Input<T> extends Bulma.Color, Bulma.Size,
    React.HTMLProps<T> {
    isActive?: boolean,
    isHovered?: boolean,
    isFocused?: boolean,
}

export const Input: React.SFC<Input<HTMLInputElement>> = (props) => {
    const className = classNames(
        'input',
        {
            'is-active': props.isActive,
            'is-hovered': props.isHovered,
            'is-focused': props.isFocused,
            ...combineModifiers(props, getColorModifiers, getSizeModifiers),
        },
        props.className);

    const HTMLProps = getHTMLProps(props, removeColorProps, removeSizeProps);

    return (
        <input {...HTMLProps} className={className} type={props.type || 'text'} />
    )
}

export default withHelpersModifiers(Input);