import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface HeroHeader<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function HeroHeader({ tag = 'header', ...props }: HeroHeader<HTMLElement>) {
    const className = classNames('hero-head', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(HeroHeader);
export default HOC;
