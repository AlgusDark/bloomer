import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelIcon<T> extends React.HTMLProps<T> {
    icon?: string;
}

export function PanelIcon({ children, ...props }: PanelIcon<HTMLElement>) {
    const icon = (
        <span {...props} className="panel-icon">
            <i className={`${props.className}`} aria-hidden="true"></i>
        </span>
    );

    return icon;
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelIcon);
export default HOC;
