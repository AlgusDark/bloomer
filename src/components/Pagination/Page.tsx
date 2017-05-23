import * as React from 'react';

export const Page: React.SFC<React.HTMLProps<HTMLLIElement>> = (props) => {

    return (
        <li {...props}>
            {props.children}
        </li>
    )
}