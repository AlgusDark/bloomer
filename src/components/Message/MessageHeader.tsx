import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const MessageHeader: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('message-header', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(MessageHeader);