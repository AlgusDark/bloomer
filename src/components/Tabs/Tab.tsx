import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export interface TabProps extends Bulma.Modifiers<HTMLLIElement> { }

export const Tab = (props: TabProps) => {
    const className = classNames(props);
    const htmlProps = getHTMLProps(props);

    return (
        <li {...htmlProps} className={className}>
            {props.children}
        </li>
    )
}