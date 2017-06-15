import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function HeroHeader(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('hero-head', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(HeroHeader);