import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface ModalCard<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function ModalCard({ tag = 'div', ...props }: ModalCard<HTMLElement>) {
    const className = classNames('modal-card', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalCard);
export default HOC;
