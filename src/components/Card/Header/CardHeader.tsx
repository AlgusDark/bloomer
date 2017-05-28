import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const CardHeader: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('card-header', props.className);

    return (
        <header {...props} className={className} />
    )
}

export default withHelpersModifiers(CardHeader);