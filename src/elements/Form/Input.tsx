import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getColorModifiers, getSizeModifiers, getStateModifiers,
    removeColorProps, removeSizeProps, removeStateProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Input<T> extends Bulma.Color, Bulma.Size, Bulma.State,
    React.HTMLProps<T> {
}

export function Input(props: Input<HTMLInputElement>) {
    const className = classNames(
        'input',
        {
            ...combineModifiers(props, getColorModifiers, getSizeModifiers, getStateModifiers),
        },
        props.className);

    const HTMLProps = getHTMLProps(props, removeColorProps, removeSizeProps, removeStateProps);

    return (
        <input {...HTMLProps} className={className} type={props.type || 'text'} />
    )
}

export default withHelpersModifiers(Input);