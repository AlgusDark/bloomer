import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export function Box(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('box', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(Box);