import * as React from 'react';
import * as classNames from 'classnames';

import {
    Grid,
    getSizeModifiers, removeSizeProps,
    getOffsetModifiers, removeOffsetProps,
} from './grid';
import { Bulma, withHelpersModifiers } from './../bulma';
import { getHTMLProps, combineModifiers } from './../helpers';

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
            )
        },
        props.className
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