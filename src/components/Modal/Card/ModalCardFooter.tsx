import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export interface ModalCardFooter<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function ModalCardFooter({ tag = 'footer', ...props }: ModalCardFooter<HTMLElement>) {
    const className = classNames('modal-card-foot', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalCardFooter);
export default HOC;
