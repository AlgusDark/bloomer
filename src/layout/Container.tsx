import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Container<T> extends Bulma.Tag, React.HTMLProps<T> {
    isFluid?: boolean;
}

export function Container({tag= 'div', ...props}: Container<HTMLElement>) {
    const className = classNames(
        'container',
        {
            'is-fluid': props.isFluid,
        },
        props.className,
    );

    const { isFluid, ...HTMLProps } = props;

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Container);
export default HOC;
