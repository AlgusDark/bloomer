import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelTabs<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function PanelTabs({ tag = 'div', ...props }: PanelTabs<HTMLElement>) {
    const className = classNames('panel-tabs', props.className, );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelTabs);
export default HOC;
