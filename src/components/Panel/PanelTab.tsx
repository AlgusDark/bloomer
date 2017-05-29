import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelTab<T> extends Bulma.Render, React.HTMLProps<T> {
    isActive?: boolean,
}

export const PanelTab: React.SFC<PanelTab<HTMLAnchorElement>> = (props) => {
    const className = classNames(
        {
            'is-active': props.isActive,
        },
        props.className
    );
    const { render, isActive, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps, className });

    return className ? <a {...HTMLProps} className={className} /> : <a {...HTMLProps} />
}

export default withHelpersModifiers(PanelTab);