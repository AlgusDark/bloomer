import classNames from 'classnames';
import React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface LevelItem<T> extends Bulma.Tag, React.HTMLProps<T> {
    isFlexible?: boolean;
}

export function LevelItem({ tag = 'div', ...props }: LevelItem<HTMLElement>) {
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

    return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(LevelItem);
export default HOC;
