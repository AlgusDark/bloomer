import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface CardFooter<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function CardFooter({ tag = 'footer', ...props }: CardFooter<HTMLElement>) {
    const className = classNames('card-footer', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardFooter);
export default HOC;
