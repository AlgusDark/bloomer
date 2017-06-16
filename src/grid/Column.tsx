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
    Grid.HorizontalSize, Grid.Offset,
    React.HTMLProps<T> { }

export function Column(props: Column<HTMLDivElement>) {
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

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Column);