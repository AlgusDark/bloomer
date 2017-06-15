import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface LevelItem<T> extends React.HTMLProps<T> {
    isFlexible?: boolean,
}

export function LevelItem(props: LevelItem<HTMLDivElement | HTMLAnchorElement>) {
    const className = classNames(
        'level-item',
        {
            'is-flexible': props.isFlexible,
        },
        props.className,
    );

    const {
        isFlexible,
        ...HTMLProps
    } = props;

    const element = props.href ? 'a' : 'div';
    
    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(LevelItem);