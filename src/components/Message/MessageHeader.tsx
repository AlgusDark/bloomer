import * as React from 'react';
import * as classNames from 'classnames';


export const MessageHeader = (props: React.HTMLProps<HTMLDivElement>) => {
    const className = classNames('message-header');

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}
