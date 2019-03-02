import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    getColorModifiers, getSizeModifiers,
    removeColorProps, removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Hero<T> extends Bulma.Color, Bulma.Size, Bulma.Tag, React.HTMLProps<T> {
    isBold?: boolean;
    isFullHeight?: boolean;
    isHalfHeight?: boolean;
}

export function Hero({ tag = 'section', ...props }: Hero<HTMLElement>) {
    const className = classNames(
        'hero',
        {
            'is-bold': props.isBold,
            'is-fullheight': props.isFullHeight,
            'is-halfheight': props.isHalfHeight,
            ...combineModifiers(props, getColorModifiers, getSizeModifiers),
        },
        props.className,
    );

    const { isBold, isFullHeight, ...rest } = props;

    const HTMLProps = getHTMLProps(
        rest,
        removeColorProps,
        removeSizeProps,
    );

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Hero);
export default HOC;
