import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface MessageBody<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function MessageBody({ tag = 'div', ...props }: MessageBody<HTMLElement>) {
    const className = classNames('message-body', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(MessageBody);
export default HOC;
