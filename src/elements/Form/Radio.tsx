import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export function Radio(props: React.HTMLProps<HTMLElement>) {
    const wrapperClassName = classNames(
        'radio',
        props.className,
    );

    const { children, className, ...HTMLProps } = props;

    return (
        <label className={wrapperClassName}>
            <input {...HTMLProps as React.Props<HTMLInputElement>} type="radio" />{children}
        </label>
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(Radio);
export default HOC;
