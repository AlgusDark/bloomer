import React from 'react';
import classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface CardHeaderTitle<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function CardHeaderTitle({ tag = 'p', ...props }: CardHeaderTitle<HTMLElement>) {
    const className = classNames('card-header-title', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardHeaderTitle);
export default HOC;
