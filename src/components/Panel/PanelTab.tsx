import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface PanelTab<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
}

export function PanelTab({ tag = 'p', render, ...props }: PanelTab<HTMLElement>) {
    const className = classNames(
        {
            ...getActiveModifiers(props),
        },
        props.className,
    ) || undefined;

    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelTab);
export default HOC;
