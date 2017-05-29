import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const MediaLeft: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('media-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(MediaLeft);