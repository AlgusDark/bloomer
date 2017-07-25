import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';
import { getGridSizesModifiers, Grid, removeGridSizesProps } from './grid';

export interface Tile<T> extends Bulma.Render, Bulma.Tag,
    React.HTMLProps<T> {
    isSize?: Grid.Sizes;
    isAncestor?: boolean;
    isChild?: boolean;
    isParent?: boolean;
    isVertical?: boolean;
}

export function Tile({ tag = 'div', render, ...props }: Tile<HTMLElement>) {
    const className = classNames(
        'tile',
        {
            'is-ancestor': props.isAncestor,
            'is-child': props.isChild,
            'is-parent': props.isParent,
            'is-vertical': props.isVertical,
            ...getGridSizesModifiers(props.isSize),
        },
        props.className,
    );

    const {
        isAncestor,
        isChild,
        isParent,
        isVertical,
        ...rest,
    } = props;

    const HTMLProps = getHTMLProps(rest, removeGridSizesProps);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Tile);
export default HOC;
