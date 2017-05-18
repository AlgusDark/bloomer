import * as React from 'react';
import * as classNames from 'classnames';

export const MessageBody = (props: React.HTMLProps<HTMLDivElement>) => {
    const className = classNames('message-body', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}
