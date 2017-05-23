import * as React from 'react';
import * as classNames from 'classnames';

export const MessageBody: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('message-body', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}
