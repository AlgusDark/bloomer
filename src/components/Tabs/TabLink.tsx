import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface TabLink<T> extends Bulma.Render, React.HTMLProps<T> { }

export function TabLink(props: TabLink<HTMLAnchorElement>) {
    const { render, ...HTMLProps } = props;

    if (render) return render({ ...HTMLProps });

    return (
        <a {...HTMLProps} />
    )
}

export default withHelpersModifiers(TabLink);