import * as React from 'react';
import * as classNames from 'classnames';

import {
    Bulma,
    getActiveModifiers, removeActiveModifiers,
    withHelpersModifiers,
} from './../../bulma';
import { getHTMLProps, combineModifiers } from './../../helpers';

export interface NavRight<T> extends Bulma.Active, React.HTMLProps<T> {
    isMenu?: boolean,
}

export const NavRight: React.SFC<NavRight<HTMLDivElement>> = (props) => {
    const className = classNames(
        'nav-right',
        {
            'nav-menu': props.isMenu,
            ...getActiveModifiers(props),
        },
        props.className,
    );

    const { isMenu, ...rest } = props;
    const HTMLProps = getHTMLProps(props, removeActiveModifiers);

    return (
        <div {...HTMLProps} className={className} />
    )
}

export default withHelpersModifiers(NavRight);