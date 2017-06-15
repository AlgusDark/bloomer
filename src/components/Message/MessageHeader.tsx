import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function MessageHeader(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('message-header', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(MessageHeader);