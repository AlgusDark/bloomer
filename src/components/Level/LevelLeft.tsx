import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const LevelLeft: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('level-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(LevelLeft);