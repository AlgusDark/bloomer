import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../bulma';
import { getHTMLProps, isOption } from './../helpers';

export interface Section<T> extends Bulma.Size, Bulma.Tag, React.HTMLProps<T> {
    isSize?: 'medium' | 'large',
}

export function Section({ tag = 'section', ...props }: Section<HTMLElement>) {
    const className = classNames(
        'section',
        {
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Section);
export default HOC;