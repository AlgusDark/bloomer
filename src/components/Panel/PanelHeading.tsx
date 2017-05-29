import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const PanelHeading: React.SFC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
    const className = classNames('panel-heading', props.className);

    return (
        <p {...props} className={className} />
    )
}

export default withHelpersModifiers(PanelHeading);