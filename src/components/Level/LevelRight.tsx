import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function LevelRight(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('level-right', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(LevelRight);