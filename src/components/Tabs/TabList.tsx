import * as React from 'react';

export const TabList = (props: React.HTMLProps<HTMLUListElement>) => {

    return (
        <ul {...props}>
            {props.children}
        </ul>
    )
}
