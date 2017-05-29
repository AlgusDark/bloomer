import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export const PanelTabs: React.SFC<React.HTMLProps<HTMLDivElement>> = (props) => {
    const className = classNames('panel-tabs', props.className, );

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(PanelTabs);