import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    isLeft, isRight, removeAlignmentProps,
    withHelpersModifiers
} from './../bulma';
import { getHTMLProps, isOption } from './../helpers';

export interface Icon<T> extends Bulma.Size, Bulma.Alignment, Bulma.Tag,
    React.HTMLProps<T> {
    isAlign?: 'left' | 'right';
    icon?: string;
}

const isAlignOption = isOption(isLeft, isRight);

export function Icon({ tag = 'span', ...props }: Icon<HTMLElement>) {
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
        React.createElement(
            'span',
            { ...HTMLProps, className },
            React.createElement(tag, { className: `fa fa-${icon}`, 'aria-hidden': 'true' })
        )
    );

    return icon ? withIcon : React.createElement(tag, { ...HTMLProps, className, children });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Icon);
export default HOC;
