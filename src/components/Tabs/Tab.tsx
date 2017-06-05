import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';

import { getHTMLProps } from './../../helpers'

export interface Tab<T> extends Bulma.Active, React.HTMLProps<T> {
}

export const Tab: React.SFC<Tab<HTMLLIElement>> = (props) => {
    const className = classNames(
        {
            ...getActiveModifiers(props)
        },
        props.className
    );
    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    const withClassName = (
        <li {...HTMLProps} className={className} />
    )

    return className ? withClassName : <li {...HTMLProps} />
}

export default withHelpersModifiers(Tab);