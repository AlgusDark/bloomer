import * as React from 'react';
import * as classNames from 'classnames';

import { Grid, getHorizontalSizeModifiers, removeHorizontalSizeProps } from './grid';
import { getHTMLProps } from './../helpers';

export interface Tile<T> extends Grid.HorizontalSize,
    React.HTMLProps<T> {
    isAncestor?: boolean,
    isChild?: boolean,
    isParent?: boolean,
    isVertical?: boolean,
}

export const Tile: React.SFC<Tile<HTMLDivElement>> = (props) => {
    const className = classNames(
        'tile',
        {
            'is-ancestor': props.isAncestor,
            'is-child': props.isChild,
            'is-parent': props.isParent,
            'is-vertical': props.isVertical,
            ...getHorizontalSizeModifiers(props),
        },
        props.className
    );
    const {
        isAncestor,
        isChild,
        isParent,
        isVertical,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeHorizontalSizeProps);

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}