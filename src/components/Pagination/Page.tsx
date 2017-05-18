import * as React from 'react';

export const Page = (props: React.HTMLProps<HTMLLIElement>) => {

    return (
        <li {...props}>
            {props.children}
        </li>
    )
}