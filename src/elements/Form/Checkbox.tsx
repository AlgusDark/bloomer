import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    withHelpersModifiers
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export const Checkbox: React.SFC<React.HTMLProps<HTMLInputElement>> = (props) => {
    const wrapperClassName = classNames(
        'checkbox',
        props.className);

    const { children, className, ...HTMLProps } = props;

    return (
        <label className={wrapperClassName} disabled={HTMLProps.disabled}>
            <input {...HTMLProps} type='checkbox'/>{children}
        </label>
    )
}

export default withHelpersModifiers(Checkbox);