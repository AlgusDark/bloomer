import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function MediaLeft(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('media-left', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(MediaLeft);