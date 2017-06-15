import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function LevelLeft(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('level-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(LevelLeft);