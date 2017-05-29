import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface LevelItem<T> extends React.HTMLProps<T> {
    isFlexible?: boolean,
}

export const LevelItem: React.SFC<LevelItem<HTMLDivElement>> = (props) => {
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

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(LevelItem);