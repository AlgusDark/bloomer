import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export function Heading(props: React.HTMLProps<HTMLParagraphElement>) {
    const className = classNames('heading', props.className);

    return (
        <p {...props} className={className} />
    )
}

export default withHelpersModifiers(Heading);