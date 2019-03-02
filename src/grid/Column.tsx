import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';
import {
    getOffsetModifiers, getSizeModifiers,
    Grid,
    removeOffsetProps, removeSizeProps,
} from './grid';

export interface Column<T> extends
    Grid.HorizontalSize, Grid.Offset, Bulma.Tag,
    React.HTMLProps<T> { }

export function Column({ tag = 'div', ...props }: Column<HTMLElement>) {
    const className = classNames(
        'column',
        {
            ...combineModifiers(
                props,
                getSizeModifiers,
                getOffsetModifiers,
            ),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(
        props,
        removeSizeProps,
        removeOffsetProps,
    );

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Column);
export default HOC;
