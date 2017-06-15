import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export function PanelTabs(props: React.HTMLProps<HTMLDivElement>) {
    const className = classNames('panel-tabs', props.className, );

    return (
        <div {...props} className={className} />
    )
}

export default withHelpersModifiers(PanelTabs);