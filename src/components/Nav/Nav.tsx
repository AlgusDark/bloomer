import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Nav<T> extends React.HTMLProps<T> {
    hasShadow?: boolean,
}

export function Nav(props:Nav<HTMLElement>) {
    const className = classNames(
        'nav',
        {
            'has-shadow': props.hasShadow,
        },
        props.className,
    );

    const {
        hasShadow,
        ...HTMLProps
    } = props;

    return (
        <nav {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Nav);