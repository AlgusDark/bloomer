import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface PanelBlock<T> extends Bulma.Render, Bulma.Active, React.HTMLProps<T> {
    isWrapped?: boolean,
    isLabel?: boolean,
}

export function PanelBlock(props: PanelBlock<HTMLAnchorElement | HTMLDivElement | HTMLLabelElement>) {
    const className = classNames(
        'panel-block',
        {
            'is-wrapped': props.isWrapped,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const {
        render,
        isWrapped,
        isLabel,
        ...rest
    } = props;
    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    if (isLabel) return <label {...HTMLProps} className={className} />
    
    const element = props.href ? 'a' : 'div';

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(PanelBlock);