import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const PanelIcon: React.SFC<React.HTMLProps<HTMLSpanElement>> = (props) => {
    const className = classNames('panel-icon', props.className);

    return (
        <span {...props} className={className} />
    )
}

export default withHelpersModifiers(PanelIcon);