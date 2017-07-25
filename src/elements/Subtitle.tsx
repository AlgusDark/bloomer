import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getHeadingModifiers, removeHeadingProps,
    withHelpersModifiers,
} from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Subtitle<T> extends Bulma.Heading, Bulma.Tag, React.HTMLProps<T> {
}

export function Subtitle({ tag = 'h2', ...props }: Subtitle<HTMLElement>) {
    const className = classNames(
        'subtitle',
        {
            ...getHeadingModifiers(props),
        },
        props.className,
    );
    const HTMLProps = getHTMLProps(props, removeHeadingProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Subtitle);
export default HOC;
