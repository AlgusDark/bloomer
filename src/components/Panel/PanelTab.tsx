import classNames from 'classnames';
import React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface PanelTab<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
}

export function PanelTab({ tag = 'a', render, ...props }: PanelTab<HTMLElement>) {
    const className = classNames(
        {
            ...getActiveModifiers(props),
        },
        props.className,
    ) || undefined;

    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelTab);
export default HOC;
