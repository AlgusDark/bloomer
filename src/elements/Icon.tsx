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

const isAlignOption = isOption(isLeft, isRight);

export function Icon({icon, children, ...props }: Icon<HTMLElement>) {
    const className = classNames(
        'icon',
        {
            ...(isAlignOption(props.isAlign) ? { [`is-${props.isAlign}`]: true } : {}),
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

    const withIcon = (
        <span {...HTMLProps} className={className}>
            <span className={`fa fa-${icon}`} aria-hidden="true"></span>
        </span>
    );

    return icon ? withIcon : <span {...HTMLProps} children={children} className={className} />;
}

const HOC = /*@__PURE__*/withHelpersModifiers(Icon);
export default HOC;
