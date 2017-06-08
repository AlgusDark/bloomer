import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, getColorModifiers,
    removeSizeProps, removeColorProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Progress<T> extends Bulma.Size, Bulma.Color,
    React.HTMLProps<T> { }

export const Progress: React.SFC<Progress<HTMLProgressElement>> = (props) => {
    const className = classNames(
        'progress',
        {
            ...combineModifiers(props, getSizeModifiers, getColorModifiers)
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeSizeProps, removeColorProps);

    return (
        <progress {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Progress);