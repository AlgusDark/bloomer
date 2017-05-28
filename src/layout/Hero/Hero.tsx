import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    removeColorProps, removeSizeProps,
    getColorModifiers, getSizeModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Hero<T> extends Bulma.Color, Bulma.Size, React.HTMLProps<T> {
    isBold?: boolean,
    isFullHeight?: boolean
}

export const Hero: React.SFC<Hero<HTMLElement>> = (props) => {
    const className = classNames(
        'hero',
        {
            'is-bold': props.isBold,
            'is-fullheight': props.isFullHeight,
            ...combineModifiers(props, getColorModifiers, getSizeModifiers)
        },
        props.className
    );
    const { isBold, isFullHeight, ...rest } = props;
    const HTMLProps = getHTMLProps(
        rest,
        removeColorProps,
        removeSizeProps,
    );

    return (
        <section {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Hero);