import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const Menu: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('menu', props.className);

    return (
        <aside {...props} className={className}>
            {props.children}
        </aside>
    )
}

export default withHelpersModifiers(Menu);