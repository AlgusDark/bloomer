import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export function Footer(props: React.HTMLProps<HTMLElement>) {
    const className = classNames('footer', props.className);

    return (
        <footer {...props} className={className} />
    )
}

export default withHelpersModifiers(Footer);