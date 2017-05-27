import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const HeroBody: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('hero-body', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}

export default withHelpersModifiers(HeroBody);