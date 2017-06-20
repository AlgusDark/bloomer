import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, removeColorProps, getColorModifiers, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Notification<T> extends Bulma.Color, Bulma.Tag, React.HTMLProps<T> { }

export function Notification({ tag = 'div', ...props }: Notification<HTMLElement>) {
    const className = classNames(
        'notification',
        {
            ...getColorModifiers(props)
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Notification);
export default HOC;
