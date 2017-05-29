import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const Panel: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('panel', props.className, );

    return (
        <nav {...props} className={className} />
    )
}

export default withHelpersModifiers(Panel);