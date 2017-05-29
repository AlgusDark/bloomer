import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const HeroFooter: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-foot', props.className);

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(HeroFooter);