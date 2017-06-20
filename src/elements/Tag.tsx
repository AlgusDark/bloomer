import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    getColorModifiers, removeColorProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Tag<T> extends Bulma.Color, Bulma.Size, Bulma.Tag,
    React.HTMLProps<T> {
    isSize?: 'medium' | 'large';
}

export function Tag({ tag = 'span', ...props }: Tag<HTMLElement>) {
    const className = classNames(
        'tag',
        {
            ...combineModifiers(props, getColorModifiers, getSizeModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeColorProps, removeSizeProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Tag);
export default HOC;