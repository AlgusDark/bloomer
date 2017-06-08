import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    isLeft, isRight, removeAlignmentProps,
    withHelpersModifiers
} from './../bulma';
import { getHTMLProps, isOption } from './../helpers';

export interface Icon<T> extends Bulma.Size, Bulma.Alignment,
    React.HTMLProps<T> {
    isAlign?: 'left' | 'right';
}

export const Icon: React.SFC<Icon<HTMLSpanElement>> = (props) => {
    const isAlignOption = isOption(isLeft, isRight);
    const className = classNames(
        'icon',
        {
            ...(isAlignOption(props.isAlign) ? {[`is-${props.isAlign}`]: true} : {}),
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

    return (
        <span {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Icon);