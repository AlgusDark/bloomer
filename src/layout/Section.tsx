import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../bulma';
import { getHTMLProps, isOption } from './../helpers';

export interface Section<T> extends Bulma.Size, React.HTMLProps<T> {
    isSize?: 'medium' | 'large',
}

export function Section(props: Section<HTMLElement>) {
    const className = classNames(
        'section',
        {
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return (
        <section {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(Section);