import * as React from 'react';

export const TabList: React.SFC<React.HTMLProps<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {props.children}
        </ul>
    )
}
