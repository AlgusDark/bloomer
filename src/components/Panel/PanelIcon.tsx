import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelIcon<T> extends Bulma.Tag, React.HTMLProps<T> {
    icon?: string;
}

export function PanelIcon({ tag = 'span', children, icon, ...props }: PanelIcon<HTMLElement>) {
    const className = classNames('panel-icon', props.className);

    const withIcon = (
        React.createElement(
            'span',
            { ...props, className },
            React.createElement(tag, { className: `fa fa-${icon}`, 'aria-hidden': 'true' })
        )
    );

    return icon ? withIcon : React.createElement(tag, { ...props, className, children });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelIcon);
export default HOC;
