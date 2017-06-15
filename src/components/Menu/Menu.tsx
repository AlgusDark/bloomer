import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function Menu(props: React.HTMLProps<HTMLElement>) {
    const className = classNames('menu', props.className);

    return (
        <aside {...props} className={className} />
    )
}

export default withHelpersModifiers(Menu);