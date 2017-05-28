import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getColorModifiers, removeColorProps,
    withHelpersModifiers,
} from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';

export interface Tag<T> extends Bulma.Color, React.HTMLProps<T> {
    isMedium?: boolean,
    isLarge?: boolean,
}

export const Tag: React.SFC<Tag<HTMLSpanElement>> = (props) => {
    const className = classNames(
        'tag',
        {
            'is-medium': props.isMedium,
            'is-large': props.isLarge,
            ...combineModifiers(props, getColorModifiers),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeColorProps);

    return (
        <span {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Tag);