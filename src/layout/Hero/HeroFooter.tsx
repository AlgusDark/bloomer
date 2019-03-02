import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface HeroFooter<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function HeroFooter({ tag= 'footer', ...props }: HeroFooter<HTMLElement>) {
    const className = classNames('hero-foot', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(HeroFooter);
export default HOC;
