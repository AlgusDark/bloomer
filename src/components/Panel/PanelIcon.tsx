import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function PanelIcon(props: React.HTMLProps<HTMLSpanElement>) {
    const className = classNames('panel-icon', props.className);

    return (
        <span {...props} className={className} />
    )
}

export default withHelpersModifiers(PanelIcon);