import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export function CardHeader(props: React.HTMLProps<HTMLElement>) {
    const className = classNames('card-header', props.className);

    return (
        <header {...props} className={className} />
    )
}

export default withHelpersModifiers(CardHeader);