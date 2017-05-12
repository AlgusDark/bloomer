import * as React from 'react';

import { classNames, getHTMLProps } from './../../helpers';

export const Page = (props: React.HTMLProps<HTMLLIElement>) => {
    const className = classNames(props);
    const htmlProps = getHTMLProps(props);

    return (
        <li {...htmlProps} className={className}>
            {props.children}
        </li>
    )
}