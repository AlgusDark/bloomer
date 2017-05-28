import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export interface Section<T> extends React.HTMLProps<T> {
    isMedium?: boolean,
    isLarge?: boolean,
}

export const Section: React.SFC<Section<HTMLElement>> = (props) => {
    const className = classNames(
        'section',
        {
            'is-medium': props.isMedium,
            'is-large': props.isLarge,
        },
        props.className,
    );

    const { isMedium, isLarge, ...HTMLProps } = props;

    return (
        <section {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Section);