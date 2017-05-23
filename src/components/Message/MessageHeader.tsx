import * as React from 'react';
import * as classNames from 'classnames';

export const MessageHeader: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('message-header', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}
