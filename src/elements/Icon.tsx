import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Icon<T> extends Bulma.Size, React.HTMLProps<T> {
    isLeft?: boolean,
    isRight?: boolean,
}

export const Icon: React.SFC<Icon<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'icon',
        {
            'is-left':props.isLeft,
            'is-right':props.isRight,
            ...combineModifiers(props, getSizeModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <span {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Icon);