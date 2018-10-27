import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Nav<T> extends Bulma.Tag, React.HTMLProps<T> {
    hasShadow?: boolean;
}

export function Nav({tag= 'nav', ...props}: Nav<HTMLElement>) {
    const className = classNames(
        'nav',
        {
            'has-shadow': props.hasShadow,
        },
        props.className,
    );

    const {
        hasShadow,
        ...HTMLProps
    } = props;

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Nav);
export default HOC;
