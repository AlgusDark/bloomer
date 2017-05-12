import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const TabList = (props: React.HTMLProps<HTMLUListElement>) => {
    const className = classNames(props);
    const HTMLProps = getHTMLProps(props);

    return (
        <ul {...HTMLProps} className={className}>
            {props.children}
        </ul>
    )
}
