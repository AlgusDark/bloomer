import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelBlock<T> extends Bulma.Render, React.HTMLProps<T> {
    isWrapped?: boolean,
    isActive?: boolean,
    isLabel?: boolean,
}

export const PanelBlock: React.SFC<PanelBlock<HTMLAnchorElement | HTMLDivElement | HTMLLabelElement>> = (props) => {
    const className = classNames(
        'panel-block',
        {
            'is-wrapped': props.isWrapped,
            'is-active': props.isActive,
        },
        props.className,
    );

    const {
        render,
        isWrapped,
        isActive,
        isLabel,
        ...HTMLProps
    } = props;

    if (render) return render({ ...HTMLProps, className });

    if (isLabel) return <label {...HTMLProps} className={className} />

    const element = props.href ? 'a' : 'div';

    return React.createElement(element, { ...HTMLProps, className });
}

export default withHelpersModifiers(PanelBlock);