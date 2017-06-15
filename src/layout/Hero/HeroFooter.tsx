import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function HeroFooter(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('hero-foot', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(HeroFooter);