import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface LevelRight<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function LevelRight({ tag = 'div', ...props }: LevelRight<HTMLElement>) {
    const className = classNames('level-right', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(LevelRight);
export default HOC;
