import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const HeroHead: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-head', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}

export default withHelpersModifiers(HeroHead);