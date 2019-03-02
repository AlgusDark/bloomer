import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface LevelLeft<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function LevelLeft({ tag = 'div', ...props }: LevelLeft<HTMLElement>) {
    const className = classNames('level-left', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(LevelLeft);
export default HOC;
