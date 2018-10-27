import * as classNames from 'classnames';
import * as React from 'react';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface PanelBlock<T> extends Bulma.Render, Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
    isWrapped?: boolean;
}

export function PanelBlock({ tag = 'div', render, ...props }: PanelBlock<HTMLElement>) {
    const className = classNames(
        'panel-block',
        {
            'is-wrapped': props.isWrapped,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const {
        isWrapped,
        ...rest
    } = props;

    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement((props.href ? 'a' : tag), { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelBlock);
export default HOC;
