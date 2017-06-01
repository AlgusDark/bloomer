import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface HeroVideo<T> extends React.HTMLProps<T> {
    isTransparent?: boolean,
}

export const HeroVideo: React.SFC<HeroVideo<HTMLDivElement>> = (props) => {
    const className = classNames(
        'hero-video',
        {
            'is-transparent': props.isTransparent,
        },
        props.className
    );

    const { isTransparent, ...HTMLProps } = props;

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(HeroVideo);