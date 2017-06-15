import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function Page(props: React.HTMLProps<HTMLLIElement>) {

    return (
        <li {...props} />
    )
}

export default withHelpersModifiers(Page);