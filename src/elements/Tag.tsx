import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    getColorModifiers, removeColorProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Tag<T> extends Bulma.Color, Bulma.Size,
React.HTMLProps<T> {
    isSize?: 'medium' | 'large'
}

export function Tag(props: Tag<HTMLSpanElement>) {
    const className = classNames(
        'tag',
        {
            ...combineModifiers(props, getColorModifiers, getSizeModifiers),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps, removeSizeProps);

    return (
        <span {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Tag);