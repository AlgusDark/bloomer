import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Radio<T> extends React.HTMLProps<T> { }

export function Radio(props: Radio<HTMLElement>) {
    const wrapperClassName = classNames(
        'radio',
        props.className
    );

    const { children, className, ...HTMLProps } = props;

    return (
        <label className={wrapperClassName} disabled={HTMLProps.disabled}>
            <input {...HTMLProps} type='radio' />{children}
        </label>
    )
}

const HOC = /*@__PURE__*/withHelpersModifiers(Radio);
export default HOC;
