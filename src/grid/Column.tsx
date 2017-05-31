import * as React from 'react';
import * as classNames from 'classnames';

import {
    Grid,
    getHorizontalSizeModifiers, removeHorizontalSizeProps,
    getSizeModifiers, removeSizeProps,
    getOffsetModifiers, removeOffsetProps,
} from './grid';
import { Bulma, withHelpersModifiers } from './../bulma';
import { getHTMLProps, combineModifiers } from './../helpers';

export interface Column<T> extends
    Grid.HorizontalSize, Grid.Size, Grid.Offset,
    React.HTMLProps<T> { }

export const Column: React.SFC<Column<HTMLDivElement>> = (props) => {
    const className = classNames(
        'column',
        {
            ...combineModifiers(
                props,
                getHorizontalSizeModifiers,
                getSizeModifiers,
                getOffsetModifiers,
            )
        },
        props.className
    );

    const HTMLProps = getHTMLProps(
        props,
        removeHorizontalSizeProps,
        removeSizeProps,
        removeOffsetProps,
    );

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Column);