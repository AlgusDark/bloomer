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
    icon?: string;
}

export function Icon(props: Icon<HTMLSpanElement>) {
    const isAlignOption = isOption(isLeft, isRight);
    const className = classNames(
        'icon',
        {
            ...(isAlignOption(props.isAlign) ? { [`is-${props.isAlign}`]: true } : {}),
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const { icon, children, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeAlignmentProps, removeSizeProps);

    const withIcon = (
        <span {...HTMLProps} className={className}>
            <span className={`fa fa-${icon}`} aria-hidden="true"></span>
        </span>
    )

    return icon ? withIcon : <span {...HTMLProps} children={children} className={className} />
}

export default withHelpersModifiers(Icon);