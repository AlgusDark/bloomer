import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function CardImage(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('card-image', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(CardImage);