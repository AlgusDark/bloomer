import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers
} from './../../bulma';

export interface Checkbox<T> extends React.HTMLProps<T> { }

export function Checkbox(props: Checkbox<HTMLElement>) {
    const wrapperClassName = classNames(
        'checkbox',
        props.className
    );

    const { children, className, ...HTMLProps } = props;

    return (
        <label className={wrapperClassName} disabled={HTMLProps.disabled}>
            <input {...HTMLProps} type='checkbox' />{children}
        </label>
    )
}

const HOC = /*@__PURE__*/withHelpersModifiers(Checkbox);
export default HOC;
