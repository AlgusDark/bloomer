import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const TabList: React.SFC<React.HTMLProps<HTMLUListElement>> = (props) => {
    return (
        <ul {...props}>
            {props.children}
        </ul>
    )
}

export default withHelpersModifiers(TabList);