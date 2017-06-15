import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps } from './../../helpers';

export interface PanelTab<T> extends Bulma.Render, Bulma.Active, React.HTMLProps<T> {
}

export function PanelTab(props: PanelTab<HTMLAnchorElement>) {
    const className = classNames(
        {
            ...getActiveModifiers(props)
        },
        props.className
    );
    const { render, ...rest } = props;
    const HTMLProps = getHTMLProps(rest, removeActiveModifiers);

    if (render) return render({ ...HTMLProps, className });

    return className ? <a {...HTMLProps} className={className} /> : <a {...HTMLProps} />
}

export default withHelpersModifiers(PanelTab);