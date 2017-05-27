import * as React from 'react';
import * as classNames from 'classnames';

import {
    Grid,
    getHorizontalSizeModifiers, removeHorizontalSizeProps,
    getSizeModifiers, removeSizeProps,
    getOffsetModifiers, removeOffsetProps,
    getMobileModifiers, removeMobileProps,
    getTabletModifiers, removeTabletProps,
    getDesktopModifiers, removeDesktopProps,
} from './grid';
import { Bulma, withHelpersModifiers } from './../bulma';
import { getHTMLProps, combineModifiers } from './../helpers';

export interface Column<T> extends
    Grid.HorizontalSize, Grid.Size, Grid.Offset,
    Grid.Mobile, Grid.Tablet, Grid.Desktop,
    React.HTMLProps<T> { }

export const Column: React.SFC<Column<HTMLDivElement>> = (props) => {
    const className = classNames(
        'column',
        {
            ...combineModifiers(props,
                getSizeModifiers,
                getHorizontalSizeModifiers,
                getOffsetModifiers,
                getMobileModifiers,
                getTabletModifiers,
                getDesktopModifiers)
        },
        props.className
    );

    const HTMLProps = getHTMLProps(
        props,
        removeHorizontalSizeProps,
        removeSizeProps,
        removeOffsetProps,
        removeMobileProps,
        removeTabletProps,
        removeDesktopProps,
    );

    return (
        <div {...HTMLProps} className={className}>
            {props.children}
        </div>
    )
}

export default withHelpersModifiers(Column);