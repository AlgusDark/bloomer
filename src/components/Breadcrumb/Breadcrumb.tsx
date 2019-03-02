import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    getAlignmentModifiers, getSizeModifiers,
    removeAlignmentProps, removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface Breadcrumb<T> extends Bulma.Alignment, Bulma.Size, Bulma.Tag,
    React.HTMLProps<T> {
    hasSeparator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    isAlign?: 'centered' | 'right';
}

const separatorClassname = (separator) => separator ? { [`has-${separator}-separator`]: true } : {};

export function Breadcrumb({ tag = 'nav', hasSeparator, ...props }: Breadcrumb<HTMLElement>) {
    const className = classNames(
        'breadcrumb',
        {
            ...separatorClassname(hasSeparator),
            ...combineModifiers(props, getAlignmentModifiers, getSizeModifiers),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeAlignmentProps, removeSizeProps);

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Breadcrumb);
export default HOC;
