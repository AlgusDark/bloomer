import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface ModalCardBody<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function ModalCardBody({ tag = 'section', ...props }: ModalCardBody<HTMLElement>) {
    const className = classNames('modal-card-body', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalCardBody);
export default HOC;
