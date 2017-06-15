import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Level<T> extends React.HTMLProps<T> {
    isMobile?: boolean,
}

export function Level(props: Level<HTMLElement>) {
    const className = classNames(
        'level',
        {
            'is-mobile': props.isMobile
        },
        props.className,
    );

    const {
        isMobile,
        ...HTMLProps
    } = props;

    return (
        <nav {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Level);