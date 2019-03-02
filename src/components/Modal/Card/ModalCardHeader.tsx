import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface ModalCardHeader<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function ModalCardHeader({ tag = 'header', ...props }: ModalCardHeader<HTMLElement>) {
    const className = classNames('modal-card-head', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalCardHeader);
export default HOC;
