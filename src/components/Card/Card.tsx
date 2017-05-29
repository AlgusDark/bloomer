import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const Card: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('card', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(Card);