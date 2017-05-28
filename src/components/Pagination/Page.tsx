import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const Page: React.SFC<React.HTMLProps<HTMLLIElement>> = (props) => {

    return (
        <li {...props} />
    )
}

export default withHelpersModifiers(Page);