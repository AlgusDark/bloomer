import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Square {
    is16x16?: boolean,
    is24x24?: boolean,
    is32x32?: boolean,
    is48x48?: boolean,
    is64x64?: boolean,
    is96x96?: boolean,
    is128x128?: boolean,
}

export interface Ratio {
    isSquare?: boolean,
    is1by1?: boolean,
    is4by3?: boolean,
    is3by2?: boolean,
    is16by9?: boolean,
    is2by1?: boolean,
}

export interface Image<T> extends Square, Ratio,
    React.HTMLProps<T> {

}

function getImageModifiers<T>(props: Image<T>) {
    return {
        'is-16x16': props.is16x16,
        'is-24x24': props.is24x24,
        'is-32x32': props.is32x32,
        'is-48x48': props.is48x48,
        'is-64x64': props.is64x64,
        'is-96x96': props.is96x96,
        'is-128x128': props.is128x128,
        'is-square': props.isSquare,
        'is-1by1': props.is1by1,
        'is-4by3': props.is4by3,
        'is-3by2': props.is3by2,
        'is-16by9': props.is16by9,
        'is-2by1': props.is2by1,
    }
}

function removeImageProps<T>(props: Image<T>) {
    const {
        is16x16,
        is24x24,
        is32x32,
        is48x48,
        is64x64,
        is96x96,
        is128x128,
        isSquare,
        is1by1,
        is4by3,
        is3by2,
        is16by9,
        is2by1,
        ...rest } = props;
    return rest;
}

export const Image: React.SFC<Image<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'image',
        {
            ...combineModifiers(props, getImageModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeImageProps);

    return (
        <figure {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Image);