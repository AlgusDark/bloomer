import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Modal<T> extends React.HTMLProps<T> {
    isActive?: boolean,
}

export const Modal: React.SFC<Modal<HTMLDivElement>> = (props) => {
    const className = classNames(
        'modal',
        {
            'is-active': props.isActive
        },
        props.className,
    );

    const {
        isActive,
        ...HTMLProps
    } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Modal);