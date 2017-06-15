import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function CardContent(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('card-content', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(CardContent);