import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, getColorModifiers, removeColorProps,  withHelpersModifiers } from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Message<T> extends Bulma.Color, Bulma.Tag, React.HTMLProps<T> { }

export function Message({tag= 'article', ...props}: Message<HTMLElement>) {
    const className = classNames(
        'message',
        {
            ...getColorModifiers(props),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Message);
export default HOC;
