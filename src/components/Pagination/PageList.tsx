import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const PageList = (props: React.HTMLProps<HTMLLIElement>) => {
    const className = classNames(props, { 'pagination-list': true });
    const HTMLProps = getHTMLProps(props);

    return (
        <ul {...HTMLProps} className={className}>
            {props.children}
        </ul>
    )
}
