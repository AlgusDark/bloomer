import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function NavLeft(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('nav-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(NavLeft);