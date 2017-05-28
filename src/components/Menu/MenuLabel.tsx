import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const MenuLabel: React.SFC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
    const className = classNames('menu-label', props.className);

    return (
        <p {...props} className={className} />
    )
}

export default withHelpersModifiers(MenuLabel);