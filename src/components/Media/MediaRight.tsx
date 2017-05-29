import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const MediaRight: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('media-right', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(MediaRight);