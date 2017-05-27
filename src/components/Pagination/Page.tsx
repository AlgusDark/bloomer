import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const Page: React.SFC<React.HTMLProps<HTMLLIElement>> = (props) => {

    return (
        <li {...props}>
            {props.children}
        </li>
    )
}

export default withHelpersModifiers(Page);