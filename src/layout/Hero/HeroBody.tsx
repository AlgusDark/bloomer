import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function HeroBody(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('hero-body', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(HeroBody);