import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function NavCenter(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('nav-center', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(NavCenter);