import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelIcon<T> extends React.HTMLProps<T> {
    icon?: string;
}

export function PanelIcon({ children, icon, ...props }: PanelIcon<HTMLElement>) {
    const className = classNames('panel-icon', props.className);

    const withIcon = (
        <span {...props} className={className}>
            <span className={`fa fa-${icon}`} aria-hidden="true"></span>
        </span>
    );

    return icon ? withIcon : <span {...props} children={children} className={className} />;
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelIcon);
export default HOC;
