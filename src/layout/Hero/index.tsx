import * as React from 'react';

import { Bulma, removeColorProps, removeSizeProps } from './../../bulma';
import { classNames, getHTMLProps } from './../../helpers';

export interface Hero<T> extends Bulma.Color, Bulma.Size, React.HTMLProps<T> {
    isBold?: boolean,
    isFullHeight?: boolean
}

export const Hero: React.SFC<Hero<HTMLElement>> = (props) => {
    const className = classNames(props, {
        hero: true,
        'is-bold': props.isBold,
        'is-fullheight': props.isFullHeight,
    });
    const { isBold, isFullHeight, ...rest } = props;
    const HTMLProps = getHTMLProps(
        rest,
        removeColorProps,
        removeSizeProps,
    );

    return (
        <section {...HTMLProps} className={className}>
            {props.children}
        </section>
    )
}