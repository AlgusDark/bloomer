import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    isCenter, isLeft, isRight, removeAlignmentProps,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, isOption } from './../../helpers';

export interface TabList<T> extends Bulma.Alignment, Bulma.Tag, React.HTMLProps<T> {
    isAlign?: 'left' | 'center' | 'right';
}

const isAlignOption = isOption(isLeft, isCenter, isRight);

export function TabList({ tag = 'ul', ...props }: TabList<HTMLElement>) {
    const className = classNames(
        {
            ...(isAlignOption(props.isAlign) ? { [`is-${props.isAlign}`]: true } : {}),
        },
        props.className,
    ) || undefined;

    const HTMLProps = getHTMLProps(props, removeAlignmentProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(TabList);
export default HOC;
