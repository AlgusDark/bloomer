import * as React from 'react';
import * as classNames from 'classnames';

import { Grid, getGridSizesModifiers, removeGridSizesProps } from './grid';
import { Bulma, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Tile<T> extends Bulma.Render,
    React.HTMLProps<T> {
    isSize?: Grid.Sizes,
    isAncestor?: boolean,
    isChild?: boolean,
    isParent?: boolean,
    isVertical?: boolean,
}

export function Tile(props: Tile<HTMLDivElement>) {
    const className = classNames(
        'tile',
        {
            'is-ancestor': props.isAncestor,
            'is-child': props.isChild,
            'is-parent': props.isParent,
            'is-vertical': props.isVertical,
            ...getGridSizesModifiers(props.isSize),
        },
        props.className
    );

    const {
        render,
        isAncestor,
        isChild,
        isParent,
        isVertical,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeGridSizesProps);

    if (render) return render({ ...HTMLProps, className });

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Tile);