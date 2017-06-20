import * as React from 'react';
import * as classNames from 'classnames';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface PanelIcon<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function PanelIcon({ tag = 'span', ...props }: PanelIcon<HTMLElement>) {
    const className = classNames('panel-icon', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(PanelIcon);
export default HOC;
