import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../../bulma';

export const CardFooter: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('card-footer', props.className);

    return (
        <footer {...props} className={className} />
    )
}

export default withHelpersModifiers(CardFooter);