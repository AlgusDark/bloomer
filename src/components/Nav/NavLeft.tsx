import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const NavLeft: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('nav-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(NavLeft);