import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export const Footer: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('footer', props.className);

    return (
        <footer {...props} className={className} />
    )
}

export default withHelpersModifiers(Footer);