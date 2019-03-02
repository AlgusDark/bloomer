import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface HeroVideo<T> extends Bulma.Tag, React.HTMLProps<T> {
    isTransparent?: boolean;
}

export function HeroVideo({ tag = 'div', ...props }: HeroVideo<HTMLElement>) {
    const className = classNames(
        'hero-video',
        {
            'is-transparent': props.isTransparent,
        },
        props.className,
    );

    const { isTransparent, ...HTMLProps } = props;

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(HeroVideo);
export default HOC;
