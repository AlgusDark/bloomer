import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface CardImage<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function CardImage({ tag = 'div', ...props }: CardImage<HTMLElement>) {
    const className = classNames('card-image', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardImage);
export default HOC;
