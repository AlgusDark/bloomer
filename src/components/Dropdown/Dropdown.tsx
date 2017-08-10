import * as classNames from 'classnames';
import * as React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface Dropdown<T> extends Bulma.Tag, Bulma.Active, React.HTMLProps<T> {
  isActive?: boolean;
  isHoverable?: boolean;
}

export function Dropdown({ tag = 'div', ...props }: Dropdown<HTMLElement>) {
    const className = classNames('dropdown', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Dropdown);
export default HOC;
