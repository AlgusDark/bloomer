import React from 'react';
import classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface CardHeader<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function CardHeader({ tag = 'header', ...props }: CardHeader<HTMLElement>) {
    const className = classNames('card-header', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardHeader);
export default HOC;
