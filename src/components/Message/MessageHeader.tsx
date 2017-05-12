import * as React from 'react';
import { Bulma } from './../../bulma';

import { classNames, getHTMLProps } from './../../helpers';

export const MessageHeader = (props: React.HTMLProps<HTMLDivElement>) => {
    const className = classNames(props, { 'message-header': true });
    const htmlProps = getHTMLProps(props);

    return (
        <div {...htmlProps} className={className}>
            {props.children}
        </div>
    )
}
