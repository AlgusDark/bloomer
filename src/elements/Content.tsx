import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, removeSizeProps, getSizeModifiers, withHelpersModifiers } from './../bulma';
import { getHTMLProps } from './../helpers';

export interface Content<T> extends Bulma.Size, Bulma.Tag,  React.HTMLProps<T> { }

export function Content({ tag = 'div', ...props }: Content<HTMLElement>) {
    const className = classNames(
        'content',
        {
            ...getSizeModifiers(props)
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Content);
export default HOC;
