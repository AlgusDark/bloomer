import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Media<T> extends React.HTMLProps<T> {
    isLarge?: boolean,
}

export const Media: React.SFC<Media<HTMLElement>> = (props) => {
    const className = classNames(
        'media',
        {
            'is-large': props.isLarge
        },
        props.className,
    );

    const {
        isLarge,
        ...HTMLProps
    } = props;

    return (
        <article {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Media);