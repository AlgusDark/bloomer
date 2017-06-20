import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers,
} from './../../../bulma';

export interface FieldBody<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function FieldBody({ tag = 'div', ...props }: FieldBody<HTMLElement>) {
    const className = classNames(
        'field-body',
        props.className
    );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(FieldBody);
export default HOC;
