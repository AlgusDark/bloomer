import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import {getHTMLProps} from './../../helpers'

export interface Media<T> extends Bulma.Size, React.HTMLProps<T> {
    isSize?: 'large',
}

export const Media: React.SFC<Media<HTMLElement>> = (props) => {
    const className = classNames(
        'media',
        {
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <article {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Media);