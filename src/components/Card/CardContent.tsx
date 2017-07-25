import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface CardContent<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function CardContent({ tag = 'div', ...props }: CardContent<HTMLElement>) {
    const className = classNames('card-content', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardContent);
export default HOC;
