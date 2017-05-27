import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../bulma';

export const Box: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('box', props.className);

    return (
        <div {...props} className={className}>
            {props.children}
        </div>
    )
}

export default withHelpersModifiers(Box);