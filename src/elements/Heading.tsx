import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export const Heading: React.SFC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
    const className = classNames('heading', props.className);

    return (
        <p {...props} className={className} />
    )
}

export default withHelpersModifiers(Heading);